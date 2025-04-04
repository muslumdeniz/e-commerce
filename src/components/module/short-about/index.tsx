import { Image } from "@/components/ui/image";

type Props = {};

const ShortAbout = ({}: Props) => {
  return (
    <section className="section-lg gap-14 ">
      <div className="container ml-28 mr-28">
        <div className="flex gap-4 justify-center">
          <div className="flex-shrink-0">
            <Image
              src="/media/short-about/short-about-1.png"
              alt="Short About 1"
              className="h-[498px] w-[217px]"
            />
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/media/short-about/short-about-2.png"
              alt="Short About 2"
              className="h-[498px] w-[280px] mr-24"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-4 max-w-xl">
            {" "}
            {/* Daraltmak için max-w-xl eklendi */}
            <h5 className="text-primary font-bold text-left text-base mb-4 max-w-md">
              {" "}
              {/* max-w-md ile genişlik daraltıldı */}
              Featured Products
            </h5>
            <h2 className="text-text-primary font-bold text-left text-4xl mb-4 max-w-md">
              {" "}
              {/* max-w-md ile genişlik daraltıldı */}
              We love what we do
            </h2>
            <p className="font-normal text-text-secondary mr-10 max-w-md">
              {" "}
              {/* max-w-md ile genişlik daraltıldı */}
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics. Problems trying
              to resolve the conflict between the two major realms of Classical
              physics: Newtonian mechanics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ShortAbout };
