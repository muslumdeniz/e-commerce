import { Image } from "../image";

type Props = {
  src: string;
  alt: string;
};

const StyleCard = ({ src, alt }: Props) => {
  return (
    <div className="relative aspect-[5/3] overflow-hidden group">
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-xs"
      />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-6 p-4 pl-12 z-10">
        <h4 className="font-bold text-sm text-warning">Ends Today</h4>
        <h2 className="font-bold text-5xl text-text-primary max-w-56">
          Elements Style
        </h2>
        <p className="font-bold text-sm text-text-primary underline">
          Explore Items
        </p>
      </div>
    </div>
  );
};

export { StyleCard };
