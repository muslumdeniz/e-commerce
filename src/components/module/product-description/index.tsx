import { Image } from "@/components/ui/image";

type Props = {};

const ProductDescription = ({}: Props) => {
  return (
    <div className="container section-lg">
      <div className="row">
        <div className="col-span-4 col-start-3">
          <p className="font-normal text-sm text-danger">Problems trying</p>
          <h3 className="font-bold text-2xl text-text-primary">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </h3>
        </div>
        <div className="col-span-4 col-start-3">
          <Image
            src="/media/short-about/description-1.png"
            alt="Description 1"
            className="!aspect-[38/45]"
          />
        </div>
        <div className="col-span-4">
          <div className="flex justify-center mb-12 -mt-9.5 gap-16">
            <Image
              src="/media/short-about/description-2.png"
              alt="Description 2"
              className="w-44 h-[198px]"
            />
            <Image
              src="/media/short-about/description-3.png"
              alt="Description 3"
              className="w-28 h-24 mt-10 "
            />
          </div>
          <p className="font-normal text-sm text-text-secondary">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
    </div>
  );
};

export { ProductDescription };
