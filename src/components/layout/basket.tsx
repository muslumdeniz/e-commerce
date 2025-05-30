"use client";

import cn from "classnames";
import { Button } from "../ui/button";
import { BasketProduct } from "../ui/cards/basket-product-card";
import Icons from "../ui/icons";
import { useUser } from "@/contexts/user-provider";

interface BasketCardProps {
  isOpen: boolean;
  className?: string;
  setIsOpen: (val: boolean) => void;
}

export default function Basket({ isOpen, setIsOpen }: BasketCardProps) {
  const { basketProducts } = useUser();
  return (
    <div
      className={cn(
        "fixed top-0 right-0 z-40 transform transition-transform duration-300", // top-16 ile biraz aşağıya inmesini sağladık
        "w-lg bg-white shadow-lg p-6 flex flex-col min-h-screen", // flex olarak düzenledik
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
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

      {/* Sepet Ürünleri */}
      <div className="overflow-y-auto flex-1 max-h-[calc(100vh-300px)]">
        {/* Yüksekliği biraz daha esnek yaptık, içerik kaydırılabilir */}
        {basketProducts.map((product) => (
          <BasketProduct key={product.id} product={product} />
        ))}
      </div>

      <div className="border-t border-gray-200 w-full" />

      {/* Sepet Özet Bilgileri */}
      <div className="flex flex-col gap-4">
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

export { Basket };
