import classNames from "classnames";
import { Image } from "../image";

type Props = {
  src: string;
  alt: string;
  title?: string;
  className?: string;
};

const FeaturedCard = ({ src, alt, title, className }: Props) => {
  return (
    <div className={classNames(className)}>
      <div className="">
        <Image src={src} alt={alt} />
      </div>
    </div>
  );
};

export { FeaturedCard };
