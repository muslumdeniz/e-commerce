"use client";

import api from "@/api";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/cards/product-card";
import { IResponsePaginate } from "@/core/_api";
import { IProduct } from "@/core/_product";
import { getThumbnailPath } from "@/utils/getThumbnailPath";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {};

const HighlightProducts = ({}: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await api.get<IResponsePaginate<IProduct>>("/products", {
        params: {
          populate: "*",
        },
      });
      if (res.data.data) {
        setProducts(res.data.data.data);
      }
    } catch (error) {}
  };
  console.log("state: ", products);
  return (
    <section className="section-lg">
      <div className="container">
        <div className="flex flex-col gap-2.5 items-center mb-14">
          <h3 className="text-text-secondary font-normal">Featured Products</h3>
          <h2 className="uppercase text-2xl text-text-primary font-bold">
            Bestseller Products
          </h2>
          <p className="text-text-secondary font-normal">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="row ">
          {products.map((product) => (
            <div key={product.id} className="col-span-2">
              <ProductCard
                img={getThumbnailPath(product.images?.[0])}
                alt={product.name}
                title={product.name}
                subTitle={product.subTitle}
                className="h-full "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HighlightProducts };
