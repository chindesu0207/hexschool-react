import { z } from "zod";

export const orderSchema = z.object({
  user: z.object({
    name: z
      .string()
      .min(2, "收件人姓名至少需要 2 個字")
      .max(50, "收件人姓名不能超過 50 個字"),
    email: z.string().email("請輸入有效的 Email 地址"),
    tel: z
      .string()
      .regex(/^09\d{8}$/, "請輸入有效的台灣手機號碼 (09 開頭，共 10 位數)"),
    address: z
      .string()
      .min(5, "地址至少需要 5 個字")
      .max(200, "地址不能超過 200 個字"),
  }),
  message: z.string(),
});
