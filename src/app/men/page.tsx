import { Brands } from "@/components/module/brands";
import { Categories } from "@/components/module/categories";
import { Products } from "@/components/module/products";
import { SubPageHero } from "@/components/module/sub-page-hero";
import { VideoCard } from "@/components/module/video-card";

export default function Home() {
  const breadcrumb = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Men",
    },
  ];
  return (
    <>
      <SubPageHero title="Men" breadcrumb={breadcrumb} />
      <VideoCard />
      <Categories />
      <Products />
      <Brands />
    </>
  );
}
