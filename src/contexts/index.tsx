"use client";

import { PropsWithChildren } from "react";
import { AuthProvider } from "./auth-provider";
import { AppProvider } from "./app-provider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AppProvider>
      <AuthProvider>{children}</AuthProvider>
    </AppProvider>
  );
};

export { Providers };
