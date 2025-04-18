"use client";

import { getProducts } from "@/api/services/product";
import { ProductCard } from "@/components/ui/cards/product-card";
import { IProduct } from "@/core/_product";
import { useEffect, useState } from "react";

type Props = {};

const HighlightProducts = ({}: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((list) => setProducts(list));
  }, []);

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
            <div key={product.id} className="col-span-3">
              <ProductCard product={product} className="h-full " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HighlightProducts };
