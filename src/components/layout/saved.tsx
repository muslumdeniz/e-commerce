"use client";

import cn from "classnames";
import { Button } from "../ui/button";

import Icons from "../ui/icons";
import { useUser } from "@/contexts/user-provider";
import { SavedProduct } from "../ui/cards/saved-product-card";

interface BasketCardProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export default function Saved({ isOpen, setIsOpen }: BasketCardProps) {
  const { savedProducts } = useUser();
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
          <h2 className="text-2xl font-bold text-text-primary">Saved</h2>
          <Icons
            className="text-primary hover:text-primary-700 hover:bg-primary-100 rounded-full transition-colors cursor-pointer"
            onClick={() => setIsOpen(false)}
            name="Cross"
            size={26}
          />
        </div>
        <div className="border-t border-gray-200 w-full" />
        {savedProducts.map((product) => (
          <SavedProduct key={product.id} product={product} />
        ))}
        <div className="border-t border-gray-200 w-full" />

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
export { Saved };
