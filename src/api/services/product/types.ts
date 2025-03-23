import { productSchema } from "@/schema/productSchema";
import { Product } from "@/types/product";
import { z } from "zod";

interface Pagination {
  category: string;
  current_page: number;
  has_next: boolean;
  has_pre: boolean;
  total_pages: number;
}

export interface ProductResponse {
  success: boolean;
  pagination?: Pagination;
  products?: Product[];
  imageUrl?: string;
}

export type ProductSchemaType = z.infer<typeof productSchema>;
export type ProductSchemaRequestType = { data: z.infer<typeof productSchema> };
