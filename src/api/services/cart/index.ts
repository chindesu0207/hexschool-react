import axiosClient from "@/api/axiosClient";
import { CartResponse, CartSchemaRequestType } from "./types";

export const cartApi = {
  baseUrl: "/api" + import.meta.env.VITE_API_PATH,
  getAll: async () => {
    const res: CartResponse = await axiosClient.get(`${cartApi.baseUrl}/cart`);
    return res;
  },
  create: async (data: CartSchemaRequestType) => {
    const res: CartResponse = await axiosClient.post(
      `${cartApi.baseUrl}/cart`,
      data,
    );
    return res;
  },
  update: async (id: string, data: CartSchemaRequestType) => {
    const res: CartResponse = await axiosClient.put(
      `${cartApi.baseUrl}/cart/${id}`,
      data,
    );
    return res;
  },
  delete: async (id: string) => {
    const res: CartResponse = await axiosClient.delete(
      `${cartApi.baseUrl}/cart/${id}`,
    );
    return res;
  },
  deleteAll: async () => {
    const res: CartResponse = await axiosClient.delete(
      `${cartApi.baseUrl}/carts`,
    );
    return res;
  },
};
