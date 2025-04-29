import { IProduct } from "@/core/_product";
import Icons from "../icons";
import { Image } from "../image";
import { Price } from "../price";
import { getThumbnailPath } from "@/utils/getThumbnailPath";
import { useUser } from "@/contexts/user-provider";
import Link from "next/link";

type Props = {
  product: IProduct;
};

const SavedProduct = ({ product }: Props) => {
  const { addBasket, removeSaved } = useUser();

  const genderPath =
    product.gender === "men"
      ? "men"
      : product.gender === "women"
      ? "women"
      : product.gender === "children"
      ? "children"
      : "";

  const productUrl = `/${genderPath}/${product.slug}`;

  return (
    <Link href={productUrl}>
      <div className="flex gap-6 mb-1 rounded-md overflow-hidden cursor-pointer hover:bg-gray-50 transition">
        <Image
          className="w-32"
          src={getThumbnailPath(product.images?.[0])}
          alt={product.name}
        />
        <div className="flex flex-col justify-between py-3 flex-1">
          <p className="font-light text-xl text-left text-text-primary">
            {product.name}
          </p>
          <div className="flex justify-between items-center">
            <Price />
            <div className="flex items-center gap-1.5">
              <Icons
                className="text-primary hover:text-primary-700 hover:bg-primary-100 rounded-full transition-colors cursor-pointer  p-1"
                name="Handcart"
                size={26}
                onClick={(e) => {
                  e.preventDefault();
                  addBasket(product);
                  removeSaved(product);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export { SavedProduct };
