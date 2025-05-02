import { Brands } from "@/components/module/brands";
import { BasketPage } from "@/pages/basket-page";

export default function Home() {
  const breadcrumb = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Basket",
    },
  ];
  return (
    <>
      <BasketPage title="Basket" breadcrumb={breadcrumb} />
      <Brands />
    </>
  );
}
