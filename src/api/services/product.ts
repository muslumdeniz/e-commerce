import { IResponsePaginate } from "@/core/_api";
import api from "..";
import { IProduct } from "@/core/_product";

export const getProducts = async () => {
  try {
    const res = await api.get<IResponsePaginate<IProduct>>("/products", {
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

export const getProduct = async (slug: string) => {
  try {
    const res = await api.get<IResponsePaginate<IProduct>>(`/products`, {
      params: {
        populate: "*",
        "filters[slug][$eq]": slug,
      },
    });

    if (res.data?.data) {
      return res.data.data;
    } else throw new Error("Product not found");
  } catch (error) {
    throw error;
  }
};
