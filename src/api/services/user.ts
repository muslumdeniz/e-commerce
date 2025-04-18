import { IResponse } from "@/core/_api";
import api from "..";
import { IUser } from "@/core/_user";

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
