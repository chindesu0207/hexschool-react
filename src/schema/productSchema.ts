import { z } from "zod";

export const productSchema = z.object({
  title: z.string(),
  category: z.string(),
  origin_price: z.union([
    z.number(),
    z
      .string()
      .refine((val) => !isNaN(parseFloat(val)), { message: "Must be a number" })
      .transform((val) => parseFloat(val)),
  ]),
  price: z.union([
    z.number(),
    z
      .string()
      .refine((val) => !isNaN(parseFloat(val)), { message: "Must be a number" })
      .transform((val) => parseFloat(val)),
  ]),
  unit: z.string(),
  description: z.string(),
  content: z.string(),
  is_enabled: z
    .union([z.boolean(), z.number()])
    .transform((val) => (typeof val === "boolean" ? (val ? 1 : 0) : val)),
  imageUrl: z.string().url(),
  imagesUrl: z.array(z.string().url().or(z.literal(""))),
});
