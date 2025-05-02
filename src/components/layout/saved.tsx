"use client";

import cn from "classnames";
import { Button } from "../ui/button";
import Icons from "../ui/icons";
import { useUser } from "@/contexts/user-provider";
import { SavedProduct } from "../ui/cards/saved-product-card";

interface SavedCardProps {
  isOpen: boolean;
  className?: string;
  setIsOpen: (val: boolean) => void;
}

export default function Saved({ isOpen, setIsOpen }: SavedCardProps) {
  const { savedProducts } = useUser();

  const isEmpty = savedProducts.length === 0;

  return (
    <div
      className={cn(
        "fixed top-0 right-0 z-40 transform transition-transform duration-300",
        "w-lg bg-white shadow-lg p-6 flex flex-col min-h-screen",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      {/* Başlık ve Kapatma */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-primary">Saved</h2>
        <Icons
          className="text-primary hover:text-primary-700 hover:bg-primary-100 rounded-full transition-colors cursor-pointer"
          onClick={() => setIsOpen(false)}
          name="Cross"
          size={26}
        />
      </div>

      <div className="border-t border-gray-200 w-full my-4" />

      {/* Kaydedilen Ürünler Alanı */}
      <div className="overflow-y-auto flex-1 max-h-[calc(100vh-300px)]">
        {isEmpty ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <Icons name="Heart" size={48} className="mb-4 opacity-50" />
            <p className="text-lg font-medium">No saved products yet.</p>
            <p className="text-sm">
              You can add items to your wishlist to view them here later.
            </p>
          </div>
        ) : (
          savedProducts.map((product) => (
            <SavedProduct key={product.id} product={product} />
          ))
        )}
      </div>

      <div className="border-t border-gray-200 w-full my-4" />

      {/* Checkout Butonu */}
      {!isEmpty && (
        <div className="mt-4">
          <Button
            label="Checkout"
            variant="primary"
            className="w-full justify-center"
          />
        </div>
      )}
    </div>
  );
}

export { Saved };
