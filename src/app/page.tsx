import { Brands } from "@/components/module/brands";
import { Hero } from "@/components/module/hero";
import { HighlightProducts } from "@/components/module/highlight-products";
import { Highlights } from "@/components/module/highlights";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Highlights />
      <HighlightProducts />
    </>
  );
}
