import { ProductPage } from "@/components/module/product-page";

type Props = {
  productID: string;
};

const ProductDetail = ({ productID }: Props) => {
  return (
    <>
      <ProductPage />
    </>
  );
};

export { ProductDetail };
