import classNames from "classnames";
import { Image } from "../image";
import { Price } from "../price";
import Icons from "../icons";
import { Button } from "../button";

type Props = {
  img: string;
  alt: string;
  title: string;
  subTitle: string;
  className?: string;
};

const ProductCard = ({ img, alt, title, subTitle, className }: Props) => {
  return (
    <div className={classNames("relative flex flex-col", className)}>
      <Icons
        className={classNames(
          "text-gray-300 hover:text-primary-700 hover:bg-primary-100 rounded-full transition-colors cursor-pointer p-1",
          "absolute top-2 right-2 z-40"
        )}
        name="Save2"
        size={32}
      />
      <Image
        className="w-full !aspect-[4/6] rounded-md overflow-hidden"
        objectFit="cover"
        src={img}
        alt={alt}
      />
      <div className="flex flex-col gap-1.5 py-4">
        <h4 className="text-text-primary font-bold">{title}</h4>
        <span className="text-sm text-text-secondary font-light">
          {subTitle}
        </span>
        <div className="flex justify-between items-center">
          <Price />
          <Button
            variant="outline"
            size="sm"
            isIconButton
            color="primaryDark"
            label="Add Basket"
            suffixIcon="BasketOk"
            iconSize={24}
          />
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
