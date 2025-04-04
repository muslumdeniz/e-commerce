import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/cards/product-card";

type Props = {};

const HighlightProducts = ({}: Props) => {
  return (
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
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-5.png"
            alt="Product 1"
            title="Graphic Design"
            className="h-full "
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-4.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-3.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-5.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-3.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-5.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-5.png"
            alt="Product 1"
            title="Graphic Design"
            className="h-full "
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-4.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-3.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-5.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-3.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-5.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-5.png"
            alt="Product 1"
            title="Graphic Design"
            className="h-full "
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-4.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-3.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-5.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-3.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-2">
          <ProductCard
            img="/media/products/product-5.png"
            alt="Highlight 1"
            title="Top Product Of the Week"
            className="h-full"
          />
        </div>
        <div className="col-span-12">
          <Button
            variant="outline"
            label="Load More Products"
            className="uppercase mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export { HighlightProducts };
