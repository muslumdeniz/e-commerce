import { IProduct } from "@/core/_product";
import Icons from "../icons";
import { Image } from "../image";
import { Price } from "../price";

type Props = {
  product: IProduct;
};

const SavedProduct = ({ product }: Props) => {
  return (
    <div className="flex gap-6 rounded-md overflow-hidden">
      <Image
        className="w-32"
        src="/media/cards/basket-card-1.png"
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
            />
            <span className="text-xl text-primary">1</span>
            <Icons
              className="text-primary hover:text-primary-700 hover:bg-primary-100 rounded-full transition-colors cursor-pointer p-1"
              name="PlusCircle"
              size={26}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { SavedProduct };
