import { Image } from "../image";

type Props = {
  src: string;
  alt: string;
};

const StyleCard = ({ src, alt }: Props) => {
  return (
    <div className="relative w-[510px] h-[300px] overflow-hidden group">
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-xs"
      />

      <div className="absolute top-1/2 left-[30px] transform -translate-y-1/2 flex flex-col text-left space-y-4 p-4 pr-40 z-10">
        <h4 className="font-bold text-sm text-warning">Ends Today</h4>
        <h2 className="font-bold text-5xl text-text-primary">Elements Style</h2>
        <p className="font-bold text-sm text-text-primary underline">
          Explore Items
        </p>
      </div>
    </div>
  );
};

export { StyleCard };
