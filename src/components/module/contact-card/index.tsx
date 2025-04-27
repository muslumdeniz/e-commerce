import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { IBreadcrumb } from "@/core/_breadcrumb";

type Props = {
  title: string;
  breadcrumb: IBreadcrumb[];
};

const ContactCard = ({ title, breadcrumb }: Props) => {
  return (
    <section className="section-md">
      <div className="container">
        <div className="flex justify-between items-center my-6">
          <h3 className="font-bold text-text-primary text-2xl">{title}</h3>
          <Breadcrumb list={breadcrumb} />
        </div>
      </div>

      <div className="relative w-full h-[750px] overflow-hidden">
        {/* Arka Plan Görseli */}
        <Image
          src="/media/cards/contact-1.png"
          alt="Contact 1"
          objectFit="cover"
          className="w-full h-full"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />

        {/* Üçlü Yazı Alanı */}
        <div className="absolute inset-0 z-20 flex justify-center items-center text-white px-4">
          <div className="w-full max-w-screen-xl mx-auto flex justify-between gap-8">
            {/* 1. Bölüm */}
            <div className="w-1/3 flex flex-col self-center text-left gap-9">
              <h2 className="font-bold text-5xl text-light-gray2">
                CONTACT US
              </h2>
              <p className="font-normal text-sm text-light-gray2">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
              <Button className="w-fit" size="lg" label="CONTACT US" />
            </div>

            {/* 2. Bölüm */}
            <div className="w-1/3 flex flex-col text-left gap-8">
              <h3 className="font-bold text-2xl text-light-gray2">Paris</h3>
              <h4 className="font-normal text-xl text-light-gray2">
                1901 Thorn ridge Cir.
              </h4>
              <h5 className="font-bold text-base text-light-gray2">
                75000 Paris
              </h5>
              <h5 className="font-bold text-base text-light-gray2">
                Phone: +451 215 215
              </h5>
              <h5 className="text-light-gray2">Fax: +451 215 215</h5>
              <h3 className="font-bold text-2xl text-light-gray2">Paris</h3>
              <h4 className="font-normal text-xl text-light-gray2">
                1901 Thorn ridge Cir.
              </h4>
              <h5 className="font-bold text-base text-light-gray2">
                75000 Paris
              </h5>
              <h5 className="font-bold text-base text-light-gray2">
                Phone: +451 215 215
              </h5>
              <h5 className="text-light-gray2">Fax: +451 215 215</h5>
            </div>

            {/* 3. Bölüm */}
            <div className="w-1/3 flex flex-col text-left gap-8">
              <h3 className="font-bold text-2xl text-light-gray2">Paris</h3>
              <h4 className="font-normal text-xl text-light-gray2">
                1901 Thorn ridge Cir.
              </h4>
              <h5 className="font-bold text-base text-light-gray2">
                75000 Paris
              </h5>
              <h5 className="font-bold text-base text-light-gray2">
                Phone: +451 215 215
              </h5>
              <h5 className="text-light-gray2">Fax: +451 215 215</h5>
              <h3 className="font-bold text-2xl text-light-gray2">Paris</h3>
              <h4 className="font-normal text-xl text-light-gray2">
                1901 Thorn ridge Cir.
              </h4>
              <h5 className="font-bold text-base text-light-gray2">
                75000 Paris
              </h5>
              <h5 className="font-bold text-base text-light-gray2">
                Phone: +451 215 215
              </h5>
              <h5 className="text-light-gray2">Fax: +451 215 215</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactCard };
