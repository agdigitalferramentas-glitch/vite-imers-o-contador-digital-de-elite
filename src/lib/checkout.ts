export const CHECKOUT_URL = "https://pay.kiwify.com.br/3IfZBFB";

/** Forward campaign attribution without changing values, casing or repeated keys. */
export function getCheckoutUrl(search: string): string {
  const checkout = new URL(CHECKOUT_URL);
  for (const [key, value] of new URLSearchParams(search)) {
    const normalized = key.toLowerCase();
    if (normalized.startsWith("utm_") || normalized === "src" || normalized === "sck") {
      checkout.searchParams.append(key, value);
    }
  }
  return checkout.toString();
}