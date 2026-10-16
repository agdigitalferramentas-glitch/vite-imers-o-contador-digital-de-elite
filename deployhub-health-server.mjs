import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import zlib from "node:zlib";

const root = path.resolve(process.argv[2] || "dist");
const port = Number(process.argv[3] || process.env.PORT || 3000);
const startedAt = new Date().toISOString();

const mime = { ".html": "text/html; charset=utf-8", ".js": "application/javascript; charset=utf-8", ".mjs": "application/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif", ".gif": "image/gif", ".ico": "image/x-icon", ".woff": "font/woff", ".woff2": "font/woff2", ".txt": "text/plain; charset=utf-8", ".xml": "application/xml; charset=utf-8", ".webmanifest": "application/manifest+json; charset=utf-8" };

// Tipos de texto que valem a pena comprimir (imagens WebP/PNG/JPG e fontes WOFF2 já são comprimidas).
const compressible = new Set([".html", ".js", ".mjs", ".css", ".json", ".svg", ".ico", ".txt", ".xml", ".webmanifest"]);
// Cache das versões comprimidas, por arquivo + data de modificação + codificação.
const compressedCache = new Map();

// Política de cache dos arquivos estáticos:
//  - /assets/*  -> nome com hash do conteúdo (Vite): pode ficar 1 ano, imutável;
//  - /fonts/*   -> nomes estáveis: 30 dias;
//  - demais arquivos (favicon, imagens soltas): 1 dia;
//  - index.html (e o fallback da SPA): sempre revalidar, para publicar novas versões na hora.
function cacheControlFor(urlPath, ext) {
  if (ext === ".html") return "no-cache";
  if (urlPath.startsWith("/assets/")) return "public, max-age=31536000, immutable";
  if (urlPath.startsWith("/fonts/")) return "public, max-age=2592000";
  return "public, max-age=86400";
}

function pickEncoding(acceptEncoding) {
  const accept = String(acceptEncoding || "");
  if (/\bbr\b/.test(accept)) return "br";
  if (/\bgzip\b/.test(accept)) return "gzip";
  return null;
}

function compress(file, mtimeMs, buffer, encoding) {
  const key = `${file}|${mtimeMs}|${encoding}`;
  let out = compressedCache.get(key);
  if (!out) {
    out = encoding === "br"
      ? zlib.brotliCompressSync(buffer, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 6 } })
      : zlib.gzipSync(buffer, { level: 9 });
    compressedCache.set(key, out);
  }
  return out;
}

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc); else acc.push(full);
  }
  return acc;
}

function healthPayload() {
  const indexPath = path.join(root, "index.html");
  const exists = fs.existsSync(indexPath);
  const files = walk(root);
  const index = exists ? fs.readFileSync(indexPath) : Buffer.from("");
  const stat = exists ? fs.statSync(indexPath) : null;
  return {
    status: exists ? "ok" : "missing_index",
    served_by: "deployhub-node-static",
    root,
    index_html: {
      exists,
      size: exists ? index.length : 0,
      sha256: exists ? crypto.createHash("sha256").update(index).digest("hex") : "missing",
      mtime: stat ? stat.mtime.toISOString() : "missing",
      head: exists ? index.toString("utf8", 0, 240).replace(/\s+/g, " ") : ""
    },
    assets: { total: files.length, js: files.filter((f) => f.endsWith(".js")).length, css: files.filter((f) => f.endsWith(".css")).length },
    deploy: { version: process.env.DEPLOY_VERSION || "unknown", commit_sha: process.env.DEPLOY_COMMIT_SHA || "unknown", timestamp: process.env.DEPLOY_TIMESTAMP || "unknown" },
    generated_at: new Date().toISOString(),
    started_at: startedAt
  };
}

function send(res, status, body, type) {
  res.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store", "X-DeployHub-Root": root, "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS", "Access-Control-Allow-Headers": "content-type" });
  res.end(body);
}

function sendStatic(req, res, file, urlPath) {
  const ext = path.extname(file).toLowerCase();
  const stat = fs.statSync(file);
  // arquivos reais usam a política de cache do tipo; o fallback da SPA (rota virtual -> index.html) nunca é cacheado
  const isFallback = path.basename(file) === "index.html" && urlPath !== "/index.html" && urlPath !== "/";
  const cacheControl = isFallback ? "no-cache" : cacheControlFor(urlPath, ext);
  const etag = `W/"${stat.size.toString(16)}-${Math.floor(stat.mtimeMs).toString(16)}"`;
  const headers = {
    "Content-Type": mime[ext] || "application/octet-stream",
    "Cache-Control": cacheControl,
    ETag: etag,
    Vary: "Accept-Encoding",
    "X-DeployHub-Root": root,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS",
    "Access-Control-Allow-Headers": "content-type"
  };
  if (req.headers["if-none-match"] === etag) {
    res.writeHead(304, headers);
    return res.end();
  }
  let body = fs.readFileSync(file);
  const encoding = compressible.has(ext) && body.length > 1024 ? pickEncoding(req.headers["accept-encoding"]) : null;
  if (encoding) {
    body = compress(file, stat.mtimeMs, body, encoding);
    headers["Content-Encoding"] = encoding;
  }
  headers["Content-Length"] = body.length;
  res.writeHead(200, headers);
  res.end(req.method === "HEAD" ? undefined : body);
}

function resolveFile(urlPath) {
  const clean = decodeURIComponent((urlPath || "/").split("?")[0]);
  const rel = path.normalize(clean).replace(/^([.][.][\/])+/, "").replace(/^\/+/, "");
  return path.join(root, rel || "index.html");
}

http.createServer((req, res) => {
  if (req.method === "OPTIONS") return send(res, 204, "", "text/plain; charset=utf-8");
  const pathname = new URL(req.url || "/", "http://localhost").pathname;
  if (/(\.php(?:\/|$)|\/php\/|kcfinder|filemanager|responsive_filemanager|jquery-file-upload|ckeditor|tinymce)/i.test(pathname)) return send(res, 404, "not found\n", "text/plain; charset=utf-8");
  if (pathname === "/healthz/live") return send(res, 200, "ok\n", "text/plain; charset=utf-8");
  if (pathname === "/healthz" || pathname === "/healthz.json") return send(res, 200, JSON.stringify(healthPayload(), null, 2), "application/json; charset=utf-8");
  let file = resolveFile(pathname);
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(root, "index.html");
  if (!fs.existsSync(file)) return send(res, 404, "index.html not found\n", "text/plain; charset=utf-8");
  sendStatic(req, res, file, pathname);
}).listen(port, "0.0.0.0", () => console.log("[deployhub-health-server] serving " + root + " on 0.0.0.0:" + port));
