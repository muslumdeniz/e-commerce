import Link from "next/link";
import { IBasketProduct } from "@/core/_basket";
import Icons from "../icons";
import { Image } from "../image";
import { Price } from "../price";
import { getThumbnailPath } from "@/utils/getThumbnailPath";
import { useUser } from "@/contexts/user-provider";

type Props = {
  product: IBasketProduct;
};

const BasketProduct = ({ product }: Props) => {
  const { addBasket, removeBasket } = useUser();

  const genderPath =
    product.product.gender === "men"
      ? "men"
      : product.product.gender === "women"
      ? "women"
      : product.product.gender === "children"
      ? "children"
      : "";

  const productUrl = `/${genderPath}/${product.product.slug}`;

  return (
    <Link href={productUrl}>
      <div className="flex gap-6 mb-1 rounded-md overflow-hidden cursor-pointer hover:bg-gray-50 transition">
        <Image
          className="w-32"
          src={getThumbnailPath(product.product.images?.[0])}
          alt={product.product.name}
        />
        <div className="flex flex-col justify-between py-3 flex-1">
          <p className="font-light text-xl text-left text-text-primary">
            {product.product.name}
          </p>
          <div className="flex justify-between items-center">
            <Price />
            <div className="flex items-center gap-1.5">
              <Icons
                className="text-primary hover:text-primary-700 hover:bg-primary-100 rounded-full transition-colors cursor-pointer p-1"
                name={product.count === 1 ? "Trush" : "MinusCircle"}
                size={26}
                onClick={(e) => {
                  e.preventDefault(); // link'e gitmesini engeller
                  removeBasket(product);
                }}
              />
              <span className="text-xl text-primary">{product.count}</span>
              <Icons
                className="text-primary hover:text-primary-700 hover:bg-primary-100 rounded-full transition-colors cursor-pointer p-1"
                name="PlusCircle"
                size={26}
                onClick={(e) => {
                  e.preventDefault();
                  addBasket(product.product);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { BasketProduct };
