import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { getVideoSource, getYouTubeId, getYouTubeThumbnail } from "./video";

describe("getVideoSource", () => {
  test("ignora links vazios ou inválidos", () => {
    assert.equal(getVideoSource(""), null);
    assert.equal(getVideoSource("   "), null);
    assert.equal(getVideoSource("não é um link"), null);
  });

  test("reconhece os formatos de link do YouTube", () => {
    const expected = "https://www.youtube-nocookie.com/embed/abc123XYZ_-?autoplay=1&rel=0&modestbranding=1&playsinline=1";
    for (const link of [
      "https://www.youtube.com/watch?v=abc123XYZ_-",
      "https://youtu.be/abc123XYZ_-",
      "https://www.youtube.com/embed/abc123XYZ_-",
      "https://www.youtube.com/shorts/abc123XYZ_-",
      "https://www.youtube.com/live/abc123XYZ_-",
    ]) {
      assert.deepEqual(getVideoSource(link), { kind: "iframe", url: expected }, link);
    }
  });

  test("rejeita link do YouTube sem identificador", () => {
    assert.equal(getVideoSource("https://www.youtube.com/"), null);
  });

  test("reconhece o Vimeo", () => {
    assert.deepEqual(getVideoSource("https://vimeo.com/123456789"), {
      kind: "iframe",
      url: "https://player.vimeo.com/video/123456789?autoplay=1&title=0&byline=0&portrait=0",
    });
    assert.deepEqual(getVideoSource("https://player.vimeo.com/video/123456789?h=abc"), {
      kind: "iframe",
      url: "https://player.vimeo.com/video/123456789?autoplay=1&title=0&byline=0&portrait=0",
    });
  });

  test("reconhece arquivos de vídeo", () => {
    assert.deepEqual(getVideoSource("https://cdn.exemplo.com/depoimento.mp4"), { kind: "file", url: "https://cdn.exemplo.com/depoimento.mp4" });
    assert.deepEqual(getVideoSource("https://cdn.exemplo.com/a.webm?x=1"), { kind: "file", url: "https://cdn.exemplo.com/a.webm?x=1" });
  });

  test("usa outras plataformas como link de incorporação", () => {
    assert.deepEqual(getVideoSource("https://player.exemplo.com/embed/xyz"), { kind: "iframe", url: "https://player.exemplo.com/embed/xyz" });
  });
});

describe("getYouTubeId e getYouTubeThumbnail", () => {
  test("extrai o id dos formatos de link usados nos depoimentos", () => {
    assert.equal(getYouTubeId("https://youtu.be/7J-DIUGUpfQ"), "7J-DIUGUpfQ");
    assert.equal(getYouTubeId("https://www.youtube.com/shorts/qiuZcIJwIXA?feature=share"), "qiuZcIJwIXA");
    assert.equal(getYouTubeId("https://www.youtube.com/watch?v=iAezB6xcdm8"), "iAezB6xcdm8");
  });

  test("devolve null para links que não são do YouTube", () => {
    assert.equal(getYouTubeId("https://vimeo.com/123456789"), null);
    assert.equal(getYouTubeId("não é um link"), null);
    assert.equal(getYouTubeThumbnail("https://vimeo.com/123456789"), null);
  });

  test("monta a miniatura do YouTube", () => {
    assert.equal(getYouTubeThumbnail("https://youtu.be/q75kB_M_ci0"), "https://i.ytimg.com/vi/q75kB_M_ci0/hqdefault.jpg");
  });
});
