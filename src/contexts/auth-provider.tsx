import api from "@/api";
import { ISession, LoginBody } from "@/core/_auth";
import React, { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  session: ISession;
  login: (userData: LoginBody) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<ISession>({
    jwt: null,
    user: null,
  });

  const login = async (userData: LoginBody) => {
    try {
      const res = await api.post<ISession>("/auth/local", {
        identifier: userData.username,
        password: userData.password,
      });

      setSession(res.data);
    } catch (error) {}
  };

  const logout = () => {
    setSession({
      jwt: null,
      user: null,
    });
  };

  // const register = (userData) => {};

  return (
    <AuthContext.Provider value={{ session, login, logout }}>
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
