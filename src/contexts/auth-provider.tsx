"use client";

import api from "@/api";
import { ISession, LoginBody, RegisterBody } from "@/core/_auth";
import { IUser } from "@/core/_user";
import { useRouter } from "next/navigation";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useApp } from "./app-provider";
import { IResponse } from "@/core/_api";
import { getLogin, getRegister } from "@/api/services/auth";
import { getUser } from "@/api/services/user";

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

  const addSession = (data: ISession) => {
    setSession(data);
    localStorage.setItem("session", JSON.stringify(data));
  };

  useEffect(() => {
    const temsSession = localStorage.getItem("session");

    if (temsSession) {
      const parsedSession = JSON.parse(temsSession) as ISession;
      setSession(parsedSession);
      api.defaults.headers.Authorization = `Bearer ${parsedSession.jwt}`;
    }
  }, []);

  const login = async (userData: LoginBody) => {
    setLoading(true);
    try {
      const res = await getLogin(userData);
      addSession(res);
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
    addSession({
      jwt: null,
      user: null,
    });
  };

  const register = async (userData: RegisterBody) => {
    setLoading(true);
    try {
      const res = await getRegister(userData);

      addSession(res);

      if (res.user?.id) {
        const userRes = await getUser(res.user.id);
        addSession({
          jwt: session.jwt,
          user: userRes,
        });
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
