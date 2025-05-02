import { IResponse } from "@/core/_api";
import api from "..";
import { IUser } from "@/core/_user";
import { RegisterBody } from "@/core/_auth";

export const getUser = async (id: number) => {
  try {
    const res = await api.put<IResponse<IUser>>(`/users/${id}`);

    if (res.data?.data) {
      return res.data.data;
    } else throw new Error("Product not found");
  } catch (error) {
    throw error;
  }
};

export const setUser = async (id: number, body: Partial<RegisterBody>) => {
  try {
    const res = await api.put<IResponse<IUser>>(`/users/${id}`, body);

    if (res.data?.data) {
      return res.data.data;
    } else throw new Error("Product not found");
  } catch (error) {
    throw error;
  }
};
