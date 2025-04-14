"use client";

import api from "@/api";
import { ISession, LoginBody, RegisterBody } from "@/core/_auth";
import { IUser } from "@/core/_user";
import { useRouter } from "next/navigation";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useApp } from "./app-provider";

type AuthContextType = {
  session: ISession;
  login: (userData: LoginBody) => void;
  register: (userData: RegisterBody) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { setLoading } = useApp();

  const [session, setSession] = useState<ISession>({
    jwt: null,
    user: null,
  });

  const login = async (userData: LoginBody) => {
    setLoading(true);
    try {
      const res = await api.post<ISession>("/auth/local", {
        identifier: userData.username,
        password: userData.password,
      });

      setSession(res.data);
    } catch (error) {}
    setLoading(false);
  };

  const logout = () => {
    api.defaults.headers.Authorization = null;
    setSession({
      jwt: null,
      user: null,
    });
  };

  const register = async (userData: RegisterBody) => {
    setLoading(true);
    try {
      const res = await api.post<ISession>("/auth/local/register", {
        username: userData.username,
        email: userData.email,
        password: userData.password,
      });

      api.defaults.headers.Authorization = `Bearer ${res.data.jwt}`;
      setSession(res.data);

      const userRes = await api.put<IUser>(
        `/users/${res.data.user?.id}`,
        userData
      );
      setSession((prev) => ({
        jwt: prev.jwt,
        user: userRes.data,
      }));
      router.push("/");
    } catch (error) {}
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ session, login, logout, register }}>
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
