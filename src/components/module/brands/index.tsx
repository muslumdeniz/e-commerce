import { Image } from "@/components/ui/image";

type Props = {};

const Brands = ({}: Props) => {
  const tempBrands = [
    {
      src: "/media/brands/brand-1.png",
      alt: "Brand 1",
    },
    {
      src: "/media/brands/brand-2.png",
      alt: "Brand 2",
    },
    {
      src: "/media/brands/brand-3.png",
      alt: "Brand 3",
    },
    {
      src: "/media/brands/brand-4.png",
      alt: "Brand 4",
    },
    {
      src: "/media/brands/brand-5.png",
      alt: "Brand 5",
    },
    {
      src: "/media/brands/brand-6.png",
      alt: "Brand 6",
    },
    {
      src: "/media/brands/brand-2.png",
      alt: "Brand 2",
    },
    {
      src: "/media/brands/brand-4.png",
      alt: "Brand 4",
    },
    {
      src: "/media/brands/brand-6.png",
      alt: "Brand 6",
    },
    {
      src: "/media/brands/brand-5.png",
      alt: "Brand 5",
    },
    {
      src: "/media/brands/brand-3.png",
      alt: "Brand 3",
    },
    {
      src: "/media/brands/brand-1.png",
      alt: "Brand 1",
    },
  ];
  return (
    <section className="container">
      <div className="row">
        {tempBrands.slice(0, 11).map((brand, key) => (
          <div key={key} className="col-span-2">
            <Image imageClass="scale-50" src={brand.src} alt={brand.alt} />
          </div>
        ))}
        <div className="col-span-2 flex items-center justify-center">
          <span className="font-bold text-6xl text-text-secondary hover:text-primary transition-colors cursor-pointer">
            +99
          </span>
        </div>
      </div>
    </section>
  );
};

export { Brands };
