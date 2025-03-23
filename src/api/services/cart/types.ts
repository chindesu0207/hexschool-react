import { cartSchema } from "@/schema/cartSchema";
import { CartData } from "@/types/cart";
import { z } from "zod";

export interface CartResponse {
  success: boolean;
  message: string;
  data: CartData;
}

export type CartSchemaType = z.infer<typeof cartSchema>;
export type CartSchemaRequestType = { data: z.infer<typeof cartSchema> };
