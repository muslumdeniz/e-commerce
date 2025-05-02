import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import Link from "next/link"; // Link bileşenini import et

type Props = {};

const Hero = ({}: Props) => {
  return (
    <header className="container section-md">
      <div className="bg-gradient-to-r from-primary-200 to-success-50 rounded-3xl">
        <div className="row">
          <div className="col-span-6 pl-24">
            <div className="flex flex-col h-full justify-center gap-8">
              <span className="text-primary-800 text-base font-bold ">
                SUMMER 2020
              </span>
              <h1 className="font-bold text-text-primary text-6xl">
                NEW COLLECTION
              </h1>
              <p className="font-extralight text-base text-text-secondary">
                Ea fugiat tempor esse culpa nisi ea amet dolor pariatur
                voluptate aliquip. Exercitation non laboris fugiat officia.
                Occaecat ex cillum qui mollit minim.
              </p>
              {/* Link bileşeni ile yönlendirme */}
              <Link href="/new-collection">
                <Button size="lg" label="SHOP NOW" className="w-fit" />
              </Link>
            </div>
          </div>
          <div className="col-span-6">
            <Image
              className="-mr-14 !aspect-[696/619]"
              src="/media/hero-1.png"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Hero };
