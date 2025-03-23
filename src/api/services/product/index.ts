import axiosClient from "@/api/axiosClient";
import { ProductResponse, ProductSchemaRequestType } from "./types";

export const productAdminApi = {
  baseUrl: "/api" + import.meta.env.VITE_API_PATH + "/admin",
  getAll: async (page: number) => {
    const res: ProductResponse = await axiosClient.get(
      `${productAdminApi.baseUrl}/products?page=${page}`,
    );
    return res;
  },
  create: async (data: ProductSchemaRequestType) => {
    const res: ProductResponse = await axiosClient.post(
      `${productAdminApi.baseUrl}/product`,
      data,
    );
    return res;
  },
  update: async (id: string, data: ProductSchemaRequestType) => {
    const res: ProductResponse = await axiosClient.put(
      `${productAdminApi.baseUrl}/product/${id}`,
      data,
    );
    return res;
  },
  delete: async (id: string) => {
    const res: ProductResponse = await axiosClient.delete(
      `${productAdminApi.baseUrl}/product/${id}`,
    );
    return res;
  },
  uploadImage: async (data: FormData) => {
    const res: ProductResponse = await axiosClient.post(
      `${productAdminApi.baseUrl}/upload`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return res;
  },
};

export const productApi = {
  baseUrl: "/api" + import.meta.env.VITE_API_PATH,
  getAll: async (page: number) => {
    const res: ProductResponse = await axiosClient.get(
      `${productApi.baseUrl}/products?page=${page}`,
    );
    const filterProducts = res.products?.filter(
      (product) => product.is_enabled !== 0,
    );
    return { ...res, products: filterProducts };
  },
};
