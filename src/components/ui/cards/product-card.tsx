import classNames from "classnames";
import { Image } from "../image";
import { Price } from "../price";
import Icons from "../icons";
import { Button } from "../button";
import { IProduct } from "@/core/_product";
import { useUser } from "@/contexts/user-provider";
import { getThumbnailPath } from "@/utils/getThumbnailPath";
import Link from "next/link";

type Props = {
  product: IProduct;
  className?: string;
};

const ProductCard = ({ product, className }: Props) => {
  const { basketProducts, addBasket, removeBasket, addSaved } = useUser();
  const isAddedBasket: boolean = basketProducts.some(
    (i) => i.id === product.id
  );
  return (
    <Link
      href={`${
        product.gender === "men"
          ? "men"
          : product.gender === "women"
          ? "women"
          : product.gender === "children"
          ? "children"
          : ""
      }/${product.slug}`}
    >
      <div className={classNames("relative flex flex-col", className)}>
        <Icons
          className={classNames(
            "text-gray-300 hover:text-primary-700 hover:bg-primary-100 rounded-full transition-colors cursor-pointer p-1",
            "absolute top-2 right-2 z-40"
          )}
          name="Save2"
          size={32}
          onClick={() => addSaved(product)}
        />
        <Image
          className="w-full !aspect-[4/6] rounded-md overflow-hidden"
          objectFit="cover"
          src={getThumbnailPath(product.images?.[0])}
          alt={product.name}
        />
        <div className="flex flex-col gap-1.5 py-4">
          <h4 className="text-text-primary font-bold">{product.name}</h4>
          <span className="text-sm text-text-secondary font-light">
            {product.subTitle}
          </span>
          <div className="flex justify-between items-center">
            <Price />
            {isAddedBasket ? (
              <Button
                variant="outline"
                size="sm"
                isIconButton
                color="primaryDark"
                label="Remove Basket"
                suffixIcon="Trush"
                iconSize={24}
                onClick={() => removeBasket(product)}
              />
            ) : (
              <Button
                variant="outline"
                size="sm"
                isIconButton
                color="primaryDark"
                label="Add Basket"
                suffixIcon="BasketOk"
                iconSize={24}
                onClick={() => addBasket(product)}
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export { ProductCard };
