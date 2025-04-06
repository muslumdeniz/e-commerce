import { ProductCard } from "@/components/ui/cards/product-card";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

type Props = {};

const Products = ({}: Props) => {
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
            <div className="col-span-2">
              <ProductCard
                img="/media/products/product-5.png"
                alt="Product 1"
                title="Graphic Design"
                className="h-full"
              />
            </div>
            <div className="col-span-2">
              <ProductCard
                img="/media/products/product-4.png"
                alt="Product 2"
                title="Top Product Of the Week"
                className="h-full"
              />
            </div>
            <div className="col-span-2">
              <ProductCard
                img="/media/products/product-3.png"
                alt="Product 3"
                title="Top Product Of the Week"
                className="h-full"
              />
            </div>
            <div className="col-span-2">
              <ProductCard
                img="/media/products/product-5.png"
                alt="Product 4"
                title="Top Product Of the Week"
                className="h-full"
              />
            </div>
            <div className="col-span-2">
              <ProductCard
                img="/media/products/product-3.png"
                alt="Product 5"
                title="Top Product Of the Week"
                className="h-full"
              />
            </div>
            <div className="col-span-2">
              <ProductCard
                img="/media/products/product-5.png"
                alt="Product 6"
                title="Top Product Of the Week"
                className="h-full"
              />
            </div>
            <div className="col-span-2">
              <ProductCard
                img="/media/products/product-5.png"
                alt="Product 7"
                title="Graphic Design"
                className="h-full"
              />
            </div>
            <div className="col-span-2">
              <ProductCard
                img="/media/products/product-4.png"
                alt="Product 8"
                title="Top Product Of the Week"
                className="h-full"
              />
            </div>
            <div className="col-span-2">
              <ProductCard
                img="/media/products/product-3.png"
                alt="Product 9"
                title="Top Product Of the Week"
                className="h-full"
              />
            </div>
            <div className="col-span-2">
              <ProductCard
                img="/media/products/product-5.png"
                alt="Product 10"
                title="Top Product Of the Week"
                className="h-full"
              />
            </div>
            <div className="col-span-2">
              <ProductCard
                img="/media/products/product-3.png"
                alt="Product 11"
                title="Top Product Of the Week"
                className="h-full"
              />
            </div>
            <div className="col-span-2">
              <ProductCard
                img="/media/products/product-5.png"
                alt="Product 12"
                title="Graphic Design"
                className="h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex  justify-center items-center">
          <Button
            color="light-gray"
            variant="outline"
            label="First"
            className="rounded-none rounded-l-md"
          />
          <Button
            color="light-gray"
            variant="outline"
            label="1"
            className="rounded-none border-l-0"
          />
          <Button
            color="light-gray"
            variant="outline"
            label="2"
            className="rounded-none border-l-0"
          />
          <Button
            color="light-gray"
            variant="outline"
            label="3"
            className="rounded-none border-l-0 border-r-0"
          />
          <Button
            color="light-gray"
            variant="outline"
            label="Next"
            className="rounded-none rounded-r-md"
          />
        </div>
      </div>
    </section>
  );
};

export { Products };
