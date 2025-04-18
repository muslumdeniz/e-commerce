"use client";

import React, { createContext, useContext, ReactNode, useState } from "react";
import api from "@/api";
import { IProduct } from "@/core/_product";

type UserContextType = {
  basketProducts: IProduct[];
  addBasket: (product: IProduct) => void;
  removeBasket: (product: IProduct) => void;
  savedProducts: IProduct[];
  addSaved: (product: IProduct) => void;
  removeSaved: (product: IProduct) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [basketProducts, setBasketProducts] = useState<IProduct[]>([]);
  const [savedProducts, setSavedProducts] = useState<IProduct[]>([]);

  const addBasket = (product: IProduct) => {
    setBasketProducts((prev) => [...prev, product]);
  };

  const removeBasket = (product: IProduct) => {
    setBasketProducts((prev) => prev.filter((i) => i.id !== product.id));
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
