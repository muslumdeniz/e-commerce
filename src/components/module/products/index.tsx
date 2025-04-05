import { ProductCard } from "@/components/ui/cards/product-card";
import { Image } from "@/components/ui/image";
import Icons from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

type Props = {};

const Products = ({}: Props) => {
  return (
    <div className="container">
      <div>
        <div>
          <div className="flex justify-between items-center my-6">
            <h3 className="font-bold text-text-primary text-2xl">Shop</h3>
            <div className="flex items-center gap-2 ml-auto">
              <h4 className="font-bold text-text-primary text-sm">Home</h4>
              <Icons name="Right" className="text-text-muted" size={35} />
              <h6 className="text-text-muted font-bold text-sm">Shop</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-12">
        <div className="col-span-3 gap-4">
          <Image
            src="/media/products/card-1.jpg"
            alt="Card 1"
            className="max-w-[205px] h-[224px]"
          />
        </div>
        <div className="col-span-3">
          <Image
            src="/media/products/card-2.jpg"
            alt="Card 2"
            className="max-w-[205px] h-[224px]"
          />
        </div>
        <div className="col-span-3">
          <Image
            src="/media/products/card-3.jpg"
            alt="Card 3"
            className="max-w-[205px] h-[224px]"
          />
        </div>
        <div className="col-span-3">
          <Image
            src="/media/products/card-4.jpg"
            alt="Card 4"
            className="max-w-[205px] h-[224px]"
          />
        </div>
      </div>
      <div className="flex justify-between gap-4 my-6">
        <div className="flex text-center items-center">
          <p className="font-bold text-sm text-text-secondary">
            Showing all 12 results
          </p>
        </div>
        <div className="flex text-center items-center gap-4">
          <p className="font-bold text-sm text-text-secondary">Views:</p>
          <Button
            variant="outline"
            className="border-2 border-light-gray"
            prefixIcon="Element11"
            size="sm"
          />
          <Button
            variant="outline"
            className="border-2 border-light-gray"
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
        <Button variant="outline" label="First" />
        <Button variant="outline" className=" rounded-none" label="1" />
        <Button variant="outline" className=" rounded-none" label="2" />
        <Button variant="outline" className=" rounded-none" label="3" />
        <Button variant="outline" label="Next" />
      </div>
    </div>
  );
};

export { Products };
