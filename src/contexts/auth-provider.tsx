import { ISession, IUser, LoginBody } from "@/core/_auth";
import React, { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  session: ISession;
  user: IUser;
  login: (userData: LoginBody) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<ISession>({});
  const [user, setUser] = useState<IUser>({});

  const login = (userData: LoginBody) => {};

  const logout = () => {};

  return (
    <AuthContext.Provider value={{ session, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { useAuth, AuthProvider };
