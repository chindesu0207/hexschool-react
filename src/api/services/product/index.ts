import axiosClient from "@/api/axiosClient";
import { ProductResponse } from "./types";

export const productApi = {
  baseUrl: "/api" + import.meta.env.VITE_API_PATH + "/admin",
  getAll: async () => {
    const res: ProductResponse = await axiosClient.get(
      `${productApi.baseUrl}/products`,
    );
    return res;
  },
};
