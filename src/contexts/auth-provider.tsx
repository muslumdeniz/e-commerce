"use client";

import api from "@/api";
import { ISession, LoginBody, RegisterBody } from "@/core/_auth";
import { IUser } from "@/core/_user";
import { useRouter } from "next/navigation";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useApp } from "./app-provider";
import { IResponse } from "@/core/_api";

type AuthContextType = {
  session: ISession;
  login: (userData: LoginBody) => void;
  register: (userData: RegisterBody) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { setLoading, showToast } = useApp();

  const [session, setSession] = useState<ISession>({
    jwt: null,
    user: null,
  });

  const login = async (userData: LoginBody) => {
    setLoading(true);
    try {
      const res = await api.post<IResponse<ISession>>("/auth/local", {
        identifier: userData.username,
        password: userData.password,
      });
      if (!!res?.data?.data) setSession(res.data.data);
    } catch (error: any) {
      const message = error?.response?.data?.error?.message;

      showToast({
        title: "Error",
        description:
          typeof message === "string"
            ? message
            : "Invalid identifier or password",
        status: "error",
      });
    }
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
      const res = await api.post<IResponse<ISession>>("/auth/local/register", {
        username: userData.username,
        email: userData.email,
        password: userData.password,
      });

      if (res.data?.data) {
        api.defaults.headers.Authorization = `Bearer ${res.data.data.jwt}`;
        setSession(res.data.data);

        const userRes = await api.put<IResponse<IUser>>(
          `/users/${res.data.data.user?.id}`,
          userData
        );
        setSession((prev) => ({
          jwt: prev.jwt,
          user: userRes.data.data,
        }));
        router.push("/");
      }
    } catch (error: any) {
      const message = error?.response?.data?.error?.message;

      showToast({
        title: "Error",
        description:
          typeof message === "string"
            ? message
            : "Invalid identifier or password",
        status: "error",
      });
    }
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
