import { z } from "zod";
import { orderSchema } from "@/schema/orderSchema";
import { Order } from "@/types/order";

interface Pagination {
  category: string;
  current_page: number;
  has_next: boolean;
  has_pre: boolean;
  total_pages: number;
}

export interface OrderResponse {
  success: boolean;
  orders: Order[];
  pagination: Pagination;
  message: string;
}

export interface CreateOrderResponse {
  success: boolean;
  message: string;
  total: number;
  create_at: number;
  orderId: string;
}
export type OrderSchemaType = z.infer<typeof orderSchema>;
export type OrderSchemaRequestType = { data: z.infer<typeof orderSchema> };
