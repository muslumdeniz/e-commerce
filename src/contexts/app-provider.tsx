"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  loading: boolean;
  setLoading: (val: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AuthProvider");
  }
  return context;
};

export { useApp, AppProvider };
