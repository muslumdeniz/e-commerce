import { Brands } from "@/components/module/brands";
import { Categories } from "@/components/module/categories";
import { Products } from "@/components/module/products";
import { Promotion } from "@/components/module/promotion";
import { SubPageHero } from "@/components/module/sub-page-hero";

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
      <Categories />
      <Promotion />
      <Products />
      <Brands />
    </>
  );
}
