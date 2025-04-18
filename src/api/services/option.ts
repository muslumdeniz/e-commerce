import { IResponsePaginate } from "@/core/_api";
import api from "..";
import { IOption } from "@/core/_option";

export const getOptions = async () => {
  try {
    const res = await api.get<IResponsePaginate<IOption>>("/option-values", {
      params: {
        populate: "*",
      },
    });
    if (res.data.data) {
      return res.data.data.data;
    } else throw new Error("Product not found");
  } catch (error) {
    throw error;
  }
};
