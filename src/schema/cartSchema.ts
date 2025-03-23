import { z } from "zod";

export const cartSchema = z.object({
  product_id: z.string(),
  qty: z.number(),
});
