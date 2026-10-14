import { describe, expect, test } from "bun:test";
import { getCheckoutUrl } from "./checkout";

describe("checkout attribution", () => {
  test("uses the requested checkout with no campaign parameters", () => {
    expect(getCheckoutUrl("")).toBe("https://pay.kiwify.com.br/3IfZBFB");
  });

  test("forwards every UTM including custom and repeated parameters", () => {
    const url = new URL(getCheckoutUrl("?utm_source=google&utm_medium=cpc&utm_campaign=novembro&utm_term=contador&utm_content=video&utm_id=42&utm_custom=extra&utm_content=imagem"));
    expect([...url.searchParams]).toEqual([
      ["utm_source", "google"], ["utm_medium", "cpc"], ["utm_campaign", "novembro"],
      ["utm_term", "contador"], ["utm_content", "video"], ["utm_id", "42"],
      ["utm_custom", "extra"], ["utm_content", "imagem"],
    ]);
  });

  test("forwards SRC and SCK without losing encoded characters or casing", () => {
    const url = new URL(getCheckoutUrl("?SRC=an%C3%BAncio%20%26%20a%2Bb&SCK=canal%2Foferta%3Dx&src=segundo&sck="));
    expect([...url.searchParams]).toEqual([
      ["SRC", "anúncio & a+b"], ["SCK", "canal/oferta=x"], ["src", "segundo"], ["sck", ""],
    ]);
  });

  test("does not pass unrelated parameters", () => {
    expect(getCheckoutUrl("?email=example&redirect=other&utm_source=meta")).toBe(
      "https://pay.kiwify.com.br/3IfZBFB?utm_source=meta",
    );
  });
});