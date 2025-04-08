import { Image } from "@/components/ui/image";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { IBreadcrumb } from "@/core/_breadcrumb";

type Props = {
  breadcrumb: IBreadcrumb[];
};

const InnerHero = ({ breadcrumb }: Props) => {
  return (
    <header className="container">
      <div className="bg-gradient-to-r rounded-3xl">
        <div className="row">
          <div className="col-span-6 flex flex-col">
            <Breadcrumb list={breadcrumb} className="!ml-0 mt-6" />
            <div className="flex-1 flex flex-col justify-center gap-8">
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
              className=""
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
