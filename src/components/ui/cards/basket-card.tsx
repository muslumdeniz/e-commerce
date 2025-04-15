"use client";

import cn from "classnames";
import { Button } from "../button";
import { BasketProduct } from "./basket-product-card";
import Icons from "../icons";

interface BasketCardProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export default function BasketCard({ isOpen, setIsOpen }: BasketCardProps) {
  return (
    <div
      className={cn(
        "fixed top-0 right-0 z-40 transform transition-transform duration-300",
        "h-full w-lg bg-white shadow-lg p-6 overflow-y-scroll",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex flex-col gap-6 min-h-full">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-text-primary">Basket</h2>
          <Icons
            className="text-primary hover:text-primary-700 hover:bg-primary-100 rounded-full transition-colors cursor-pointer"
            onClick={() => setIsOpen(false)}
            name="Cross"
            size={26}
          />
        </div>
        <div className="border-t border-gray-200 w-full" />
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
        <BasketProduct />
        <div className="border-t border-gray-200 w-full" />
        <div className=" flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="font-medium text-base text-text-primary">Subtotal</p>
            <p className="font-medium text-base text-text-primary">$2347</p>
          </div>
          <div className="flex justify-between">
            <p className="font-mono text-base text-text-secondary">
              Estimated Tax
            </p>
            <p className="font-medium text-base text-text-primary">$50</p>
          </div>
          <div className="flex justify-between">
            <p className="font-mono text-base text-text-secondary">
              Estimated shipping & Handling $29
            </p>
            <p className="font-medium text-base text-text-primary">$29</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium text-base text-text-primary">Total</p>
            <p className="font-mono text-base text-text-secondary">$2426</p>
          </div>
        </div>
        <div className="border-t border-gray-200 w-full" />
        <Button
          label="Checkout"
          variant="primary"
          className="w-full justify-center"
        />
      </div>
    </div>
  );
}
export { BasketCard };
