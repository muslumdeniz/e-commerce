import classNames from "classnames";
import { Button } from "../button";
import { Image } from "../image";

type Props = {
  img: string;
  alt: string;
  title: string;
  buttonLabel: string;
  className?: string;
};

const HighlightCard = ({ img, alt, title, buttonLabel, className }: Props) => {
  return (
    <div
      className={classNames(
        "flex relative bg-tertiary-50 overflow-hidden group cursor-pointer",
        className
      )}
    >
      <Image
        className="!absolute w-full h-full !aspect-auto"
        objectFit="cover"
        src={img}
        alt={alt}
      />
      <div className="absolute w-full h-full z-11 group-hover:bg-gray-500/30 transition-all duration-500 ease-in-out" />
      <div
        className="bg-primary/75 px-12 py-14 mt-auto w-full lg:max-w-4/6 relative z-12 flex flex-col gap-5 
              opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
      >
        <h1 className="text-light-bg text-2xl font-bold">{title}</h1>
        <Button
          className="w-fit"
          color="light"
          variant="outline"
          label={buttonLabel}
        />
      </div>
    </div>
  );
};

export { HighlightCard };
