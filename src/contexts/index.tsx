"use client";

import { PropsWithChildren } from "react";
import { AuthProvider } from "./auth-provider";
import { AppProvider } from "./app-provider";
import { UserProvider } from "./user-provider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AppProvider>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </AppProvider>
  );
};

export { Providers };
