import { Image } from "../image";

type Props = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

const CategoryCard = ({ title, description, src, alt }: Props) => {
  return (
    <div className="relative group overflow-hidden aspect-square">
      <Image
        src={src}
        alt={alt}
        objectFit="cover"
        className="group-hover:blur-xs group-hover:scale-110 transition-all duration-700"
      />
      <div className="absolute top-0 z-20 w-full h-full flex flex-col justify-center items-center bg-gray-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 cursor-pointer">
        <h5 className="font-bold text-base text-light-bg mb-2.5">{title}</h5>
        <p className="font-normal text-sm text-light-bg">{description}</p>
      </div>
    </div>
  );
};

export { CategoryCard };
