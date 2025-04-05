import { Brands } from "@/components/module/brands";
import { FeaturedProduct } from "@/components/module/featured-product";
import { Hero } from "@/components/module/hero";
import { HighlightProducts } from "@/components/module/highlight-products";
import { Highlights } from "@/components/module/highlights";
import { Post } from "@/components/module/posts";
import { ShortAbout } from "@/components/module/short-about";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Highlights />
      <HighlightProducts />
      <ShortAbout />
      <FeaturedProduct />
      <Post />
    </>
  );
}
