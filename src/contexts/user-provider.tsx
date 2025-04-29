"use client";

import React, { createContext, useContext, ReactNode, useState } from "react";
import { IProduct } from "@/core/_product";
import { IBasketProduct } from "@/core/_basket";

type UserContextType = {
  basketProducts: IBasketProduct[];
  addBasket: (product: IProduct) => void;
  removeBasket: (product: IBasketProduct) => void;
  savedProducts: IProduct[];
  addSaved: (product: IProduct) => void;
  removeSaved: (product: IProduct) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [basketProducts, setBasketProducts] = useState<IBasketProduct[]>([]);
  const [savedProducts, setSavedProducts] = useState<IProduct[]>([]);

  const addBasket = (product: IProduct) => {
    const isProduct = basketProducts.some((i) => i.id === product.id);
    const newState = isProduct
      ? basketProducts.map((i) =>
          i.id === product.id ? { ...i, count: i.count + 1 } : i
        )
      : [...basketProducts, { id: product.id, product, count: 1 }];
    setBasketProducts(newState);
  };

  const removeBasket = (product: IBasketProduct) => {
    setBasketProducts((prev) =>
      product.count === 1
        ? prev.filter((i) => i.id !== product.id)
        : prev.map((i) =>
            i.id === product.id ? { ...i, count: i.count - 1 } : i
          )
    );
  };
  const addSaved = (product: IProduct) => {
    setSavedProducts((prev) => [...prev, product]);
  };

  const removeSaved = (product: IProduct) => {
    setSavedProducts((prev) => prev.filter((i) => i.id !== product.id));
  };

  return (
    <UserContext.Provider
      value={{
        basketProducts,
        addBasket,
        removeBasket,
        savedProducts,
        addSaved,
        removeSaved,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
};

export { useUser, UserProvider };
