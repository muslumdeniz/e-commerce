import classNames from "classnames";
import { Image } from "../image";

type Props = {
  img: string;
  alt: string;
  title: string;
  subTitle: string;
  className?: string;
};

const ProductCard = ({ img, alt, title, subTitle, className }: Props) => {
  return (
    <div className={classNames("flex flex-col", className)}>
      <Image className=" h-60 w-48" src={img} alt={alt} />
      <h4 className=" text-text-primary  font-bold mt-6  text-center">
        {title}
      </h4>
      <span className=" text-text-secondary font-bold text-center mt-6">
        {subTitle}
      </span>
      <label className=" text-text-muted  font-bold mt-6 text-center ">
        $16.48
        <span className=" text-secondary font-bold ml-1">$6.48</span>
      </label>
    </div>
  );
};

export { ProductCard };
