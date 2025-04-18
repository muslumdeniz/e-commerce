"use client";

import { getProduct } from "@/api/services/product";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Range } from "@/components/ui/range";
import { IProduct } from "@/core/_product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

const ProductPage = ({}: Props) => {
  const [product, setProduct] = useState<IProduct>();
  const params = useParams<{
    id: string;
  }>();

  useEffect(() => {
    if (params?.id) {
      getProduct(params?.id).then((list) => setProduct(list));
    }
  }, [params]);

  return (
    <section className="lg">
      <div className="container">
        <div className="flex gap-8 col-span-6">
          <div className="flex flex-col gap-5">
            <div>
              <Image
                src="/media/products/product-page-1.png"
                alt="Product-1"
                className="w-lg h-[450px] "
                objectFit="cover"
              />
            </div>
            <div className="flex gap-5">
              <Image
                src="/media/products/product-page-2.jpg"
                alt="Product-2"
                className="w-24 h-20"
              />
              <Image
                src="/media/products/product-page-3.png"
                alt="Product 3"
                className="w-24 h-20"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 ml-6 mr-40">
            <h4 className="font-light text-xl text-text-primary">
              Floating Phone
            </h4>
            <span className="flex gap-2.5">
              <Range />
              <h6 className="font-bold text-base text-text-secondary">
                10 Reviews
              </h6>
            </span>
            <p className="font-bold text-2xl text-text-primary">$1,139.33</p>
            <div className="flex gap-1.5">
              <h6 className="font-bold text-sm text-text-secondary">
                Availability :
              </h6>
              <h6 className="font-bold text-sm text-primary">In Stock </h6>
            </div>
            <p className="font-normal text-sm text-text-secondary">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <div className="border-t border-gray-200 w-full" />
            <div className="flex gap-2.5 py-8">
              <div className="bg-primary w-8 h-8 flex items-center cursor-pointer rounded-full"></div>
              <div className="bg-secondary w-8 h-8 flex items-center cursor-pointer rounded-full"></div>
              <div className="bg-warning w-8 h-8 flex items-center cursor-pointer rounded-full"></div>
              <div className="bg-text-primary w-8 h-8 flex items-center cursor-pointer rounded-full"></div>
            </div>
            <div className="flex gap-2.5">
              <Button label="Select Options" />
              <Button
                className="!rounded-full !p-3 transition-transform transform hover:scale-110 hover:opacity-80"
                prefixIcon="Heart"
                color="light"
                size="sm"
                iconSize={16}
                isIconButton
              />
              <Button
                className="!rounded-full !p-3 transition-transform transform hover:scale-110 hover:opacity-80"
                prefixIcon="Handcart"
                color="light"
                iconSize={16}
                size="sm"
                isIconButton
              />
              <Button
                className="!rounded-full !p-3 transition-transform transform hover:scale-110 hover:opacity-80"
                prefixIcon="Eye"
                color="light"
                size="sm"
                iconSize={16}
                isIconButton
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductPage };
