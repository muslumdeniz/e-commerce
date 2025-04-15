import NextImage from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "classnames";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  src: string | StaticImport;
  alt: string;
  objectFit?: "cover" | "contain" | "none";
  imageClass?: string;
};
export const Image: React.FC<Props> = ({
  src,
  alt,
  objectFit = "contain",
  imageClass,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(" aspect-square relative z-10", className)}
      {...props}
    >
      <NextImage
        className={classNames("-z-10", imageClass)}
        src={src}
        layout="fill"
        alt={alt}
        objectFit={objectFit}
      />
    </div>
  );
};
