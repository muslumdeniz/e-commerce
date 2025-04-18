import { useState } from "react";
import { IProduct } from "@/core/_product";
import Icons from "../icons";
import { Image } from "../image";
import { Price } from "../price";
import { getThumbnailPath } from "@/utils/getThumbnailPath";
import { useUser } from "@/contexts/user-provider";

type Props = {
  product: IProduct;
};

const BasketProduct = ({ product }: Props) => {
  const { basketProducts, addBasket, removeBasket, addSaved, removeSaved } =
    useUser();

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    addBasket(product);
  };

  const handleDecrease = () => {
    const newQty = quantity - 1;
    setQuantity(Math.max(newQty, 0));
    removeBasket(product);
    newQty === 0 && removeBasket(product);
  };

  const isAddedBasket: boolean = basketProducts.some(
    (i) => i.id === product.id
  );

  return (
    <div className="flex gap-6 rounded-md overflow-hidden">
      <Image
        className="w-32"
        src={getThumbnailPath(product.images?.[0])}
        alt="Basket 1"
      />
      <div className="flex flex-col justify-between py-3">
        <p className="font-light text-xl text-left text-text-primary">
          Koudetat à la Maison #1 (L'intégrale)
        </p>
        <div className="flex justify-between">
          <Price />
          <div className="flex items-center gap-1.5">
            <Icons
              className="text-primary hover:text-primary-700 hover:bg-primary-100 rounded-full transition-colors cursor-pointer p-1"
              name="Trush"
              size={26}
              onClick={handleDecrease}
            />
            <span className="text-xl text-primary">{quantity}</span>
            <Icons
              className="text-primary hover:text-primary-700 hover:bg-primary-100 rounded-full transition-colors cursor-pointer p-1"
              name="PlusCircle"
              size={26}
              onClick={handleIncrease}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { BasketProduct };
