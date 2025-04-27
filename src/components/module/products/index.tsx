"use client";

import { ProductCard } from "@/components/ui/cards/product-card";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { IProduct } from "@/core/_product";
import { getProducts } from "@/api/services/product";

type Props = {};

const Products = ({}: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((list) => setProducts(list));
  }, []);

  return (
    <section className="section-md">
      <div className="container">
        <div className="flex justify-between gap-4 my-6">
          <div className="flex text-center items-center">
            <p className="font-bold text-sm text-text-secondary">
              Showing all 12 results
            </p>
          </div>
          <div className="flex text-center items-center gap-4">
            <p className="font-bold text-sm text-text-secondary">Views:</p>
            <Button
              color="light-gray"
              variant="outline"
              prefixIcon="Element11"
              size="sm"
            />
            <Button
              color="light-gray"
              variant="outline"
              prefixIcon="QuestionnaireTablet"
              size="sm"
            />
          </div>
          <div className="flex text-center items-center gap-4">
            <Select selectSize="base" />
            <Button variant="primary" label="Filter" />
          </div>
        </div>
        <div className="my-14">
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-span-3">
                <ProductCard product={product} className="h-full " />
              </div>
            ))}
          </div>
        </div>
        <div className="flex  justify-center items-center">
          <Button
            color="light-gray"
            variant="outline"
            label="First"
            className="rounded-none rounded-l-md shadow"
          />
          <Button
            color="light-gray"
            variant="outline"
            label="1"
            className="rounded-none border-l-0 shadow"
          />
          <Button
            color="light-gray"
            variant="outline"
            label="2"
            className="rounded-none border-l-0 shadow"
          />
          <Button
            color="light-gray"
            variant="outline"
            label="3"
            className="rounded-none border-l-0 border-r-0 shadow"
          />
          <Button
            color="light-gray"
            variant="outline"
            label="Next"
            className="rounded-none rounded-r-md shadow"
          />
        </div>
      </div>
    </section>
  );
};

export { Products };
