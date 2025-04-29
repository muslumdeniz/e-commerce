"use client";

import cn from "classnames";
import { Button } from "../ui/button";
import Icons from "../ui/icons";
import { useUser } from "@/contexts/user-provider";
import { SavedProduct } from "../ui/cards/saved-product-card";

interface BasketCardProps {
  isOpen: boolean;
  className?: string;
  setIsOpen: (val: boolean) => void;
}

export default function Saved({ isOpen, setIsOpen }: BasketCardProps) {
  const { savedProducts } = useUser();
  return (
    <div
      className={cn(
        "fixed top-0 right-0 z-40 transform transition-transform duration-300",
        "w-lg bg-white shadow-lg p-6 flex flex-col min-h-screen", // flex düzeni
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
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

      {/* Kaydedilen Ürünler */}
      <div className="overflow-y-auto flex-1 max-h-[calc(100vh-300px)]">
        {/* Kaydırılabilir alan */}
        {savedProducts.map((product) => (
          <SavedProduct key={product.id} product={product} />
        ))}
      </div>

      <div className="border-t border-gray-200 w-full" />

      {/* Sepet Özet Bilgileri veya İlgili Bilgiler */}
      <div className="flex flex-col gap-4">
        {/* Özet bilgileri burada eklenebilir */}
      </div>

      <div className="border-t border-gray-200 w-full" />

      {/* Sabit Checkout Butonu */}
      <div className="mt-4">
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
