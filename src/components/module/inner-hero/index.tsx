import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";

type Props = {};

const InnerHero = ({}: Props) => {
  return (
    <header className="container section-md">
      <div className="bg-gradient-to-rrounded-3xl">
        <div className="row">
          <div className="col-span-6 pl-24">
            <div className="flex flex-col h-full justify-center gap-8">
              <span className="text-text-primary text-base font-bold ">
                WHAT WE DO
              </span>
              <h1 className="font-bold text-text-primary text-6xl">
                Innovation tailored for you
              </h1>
              <h4 className="font-normal text-text-secondary text-lg">
                We know how large objects will act, but things on a small scale
              </h4>
            </div>
          </div>
          <div className="col-span-6">
            <Image
              className="-mr-14 !aspect-[696/619]"
              src="/media/inner-hero/inner-1.png"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export { InnerHero };
