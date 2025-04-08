"use client";

import { PropsWithChildren } from "react";
import { AuthProvider } from "./auth-provider";

const Providers = ({ children }: PropsWithChildren) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export { Providers };
