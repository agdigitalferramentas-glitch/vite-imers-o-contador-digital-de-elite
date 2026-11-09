export const CHECKOUT_URL = "https://pay.kiwify.com.br/3IfZBFB";
/** Checkout do combo Black Friday (/combo). */
export const COMBO_CHECKOUT_URL = "https://pay.kiwify.com.br/E1cDEN7";

/** Forward campaign attribution without changing values, casing or repeated keys. */
export function getCheckoutUrl(search: string, base: string = CHECKOUT_URL): string {
  const checkout = new URL(base);
  for (const [key, value] of new URLSearchParams(search)) {
    const normalized = key.toLowerCase();
    if (normalized.startsWith("utm_") || normalized === "src" || normalized === "sck") {
      checkout.searchParams.append(key, value);
    }
  }
  return checkout.toString();
}