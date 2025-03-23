import axiosClient from "@/api/axiosClient";
import {
  CreateOrderResponse,
  OrderResponse,
  OrderSchemaRequestType,
} from "./types";

export const orderApi = {
  baseUrl: "/api" + import.meta.env.VITE_API_PATH,
  getAll: async () => {
    const res: OrderResponse = await axiosClient.get(
      `${orderApi.baseUrl}/orders`,
    );
    return res;
  },
  create: async (data: OrderSchemaRequestType) => {
    const res: CreateOrderResponse = await axiosClient.post(
      `${orderApi.baseUrl}/order`,
      data,
    );
    return res;
  },
};
