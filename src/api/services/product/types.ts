import { productSchema } from "@/schema/productSchema";
import { Product } from "@/types/product";
import { z } from "zod";

export interface ProductResponse {
  success: true;
  products: Product[];
}

export type ProductSchemaType = z.infer<typeof productSchema>;
export type ProductSchemaRequestType = { data: z.infer<typeof productSchema> };
