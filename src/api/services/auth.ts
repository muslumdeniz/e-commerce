import { ISession, LoginBody, RegisterBody } from "@/core/_auth";
import api from "..";
import { IResponse } from "@/core/_api";

export const getLogin = async (userData: LoginBody) => {
  try {
    const res = await api.post<IResponse<ISession>>("/auth/local", {
      identifier: userData.username,
      password: userData.password,
    });
    if (!!res?.data?.data) {
      return res.data.data;
    } else throw new Error("Product not found");
  } catch (error) {
    throw error;
  }
};

export const getRegister = async (userData: RegisterBody) => {
  try {
    const res = await api.post<IResponse<ISession>>("/auth/local/register", {
      username: userData.username,
      email: userData.email,
      password: userData.password,
    });

    if (res.data?.data) {
      return res.data.data;
    } else throw new Error("Product not found");
  } catch (error) {
    throw error;
  }
};
