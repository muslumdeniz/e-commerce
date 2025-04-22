"use client";

import { getProduct } from "@/api/services/product";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Range } from "@/components/ui/range";
import { Select } from "@/components/ui/select";
import { IBreadcrumb } from "@/core/_breadcrumb";
import { IProduct } from "@/core/_product";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  breadcrumb: IBreadcrumb[];
};

const ProductPage = ({ breadcrumb }: Props) => {
  const [product, setProduct] = useState<IProduct>();
  const params = useParams<{ slug: string }>();

  useEffect(() => {
    if (params?.slug) {
      getProduct(params?.slug).then((list) => setProduct(list.data[0]));
    }
  }, [params]);

  return (
    <section className="lg">
      <div className="container">
        <Breadcrumb list={breadcrumb} className="!ml-0 mt-6 mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sol Fotoğraf Grubu */}
          <div className="flex flex-col aspect-[3/4] w-full gap-3">
            <Image
              src="/media/products/product-page-1.png"
              alt="Product-1"
              className="w-full h-full"
              objectFit="cover"
            />
            <Image
              src="/media/products/product-page-2.png"
              alt="Product-2"
              className="w-full h-full"
              objectFit="cover"
            />
          </div>

          {/* Orta Fotoğraf Grubu */}
          <div className="flex flex-col aspect-[3/4] w-full gap-3">
            <Image
              src="/media/products/product-page-3.png"
              alt="Product-3"
              className="w-full h-full"
              objectFit="cover"
            />
            <Image
              src="/media/products/product-page-4.png"
              alt="Product-4"
              className="w-full h-full"
              objectFit="cover"
            />
          </div>

          {/* Ürün Bilgi Bölümü */}
          <div className="flex flex-col gap-5">
            <h4 className="font-light text-xl text-text-primary">
              {product?.name}
            </h4>

            <span className="flex items-center gap-2.5">
              <Range />
              <h6 className="font-bold text-base text-text-secondary">
                10 Reviews
              </h6>
              <Button
                className="!rounded-full !p-3 transition-transform transform hover:scale-110 hover:opacity-80"
                prefixIcon="Heart"
                color="light"
                size="sm"
                iconSize={18}
                isIconButton
              />
              <Button
                className="!rounded-full !p-3 transition-transform transform hover:scale-110 hover:opacity-80"
                prefixIcon="ExitUp"
                color="light"
                size="sm"
                iconSize={18}
                isIconButton
              />
            </span>

            <p className="font-bold text-2xl text-text-primary">$1,139.33</p>

            <div className="flex gap-1.5">
              <h6 className="font-bold text-sm text-text-secondary">
                Availability :
              </h6>
              <h6 className="font-bold text-sm text-primary">In Stock</h6>
            </div>

            <div className="flex gap-2.5 py-8">
              <div className="bg-primary w-8 h-8 flex items-center cursor-pointer rounded-full"></div>
              <div className="bg-secondary w-8 h-8 flex items-center cursor-pointer rounded-full"></div>
              <div className="bg-warning w-8 h-8 flex items-center cursor-pointer rounded-full"></div>
              <div className="bg-text-primary w-8 h-8 flex items-center cursor-pointer rounded-full"></div>
            </div>

            <div className="flex flex-col gap-12">
              <Select info="Choose Size" />
              <Button label="Select Options" className=" justify-center" />
              <div className="border-t border-gray-200 w-full" />
              <h2 className="font-medium text-base text-text-primary">
                Product Features
              </h2>
              <p className="font-normal text-sm text-text-secondary">
                Sadeliğin özen ve kaliteyle buluştuğu Mavi Edition
                koleksiyonundan Brad Edition İndigo Mavisi Jean Gömlek. Bu ürün
                aynı zamanda Mavi nin sürdürülebilir All Blue koleksiyonunun da
                bir parçasıdır. Bu ürünün üretiminde TENCEL TM sertifikalı kumaş
                kullanılmıştır. Ürün Kodu: 0210921-90592 Fiyat Geçerlilik
                Tarihi: 20.12.2024 Kumaş Bilgileri %50 Pamuk %40 Lyocell Tencel
                TM %10 Modal Tencel TM Manken Ölçüleri Jean: Bel: 31 / Boy: 31,
                Üst: L Boy: 189.5 cm / Bel: 80 cm / Göğüs: 98 cm / Kalça: 98 cm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProductPage };
