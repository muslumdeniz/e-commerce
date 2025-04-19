import { Brands } from "@/components/module/brands";
import { HighlightProducts } from "@/components/module/highlight-products";
import { ProductPage } from "@/components/module/product-page";
import { Breadcrumb } from "@/components/ui/breadcrumb";

type Props = {
  productID: string;
};

const ProductDetail = ({ productID }: Props) => {
  const breadcrumb = [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Shop",
    },
  ];
  return (
    <>
      <ProductPage breadcrumb={breadcrumb} />
      <HighlightProducts />
      <Brands />
    </>
  );
};

export { ProductDetail };
