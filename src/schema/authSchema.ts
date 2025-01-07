import { z } from "zod";

export const signInSchema = z.object({
  username: z.string().email({
    message: "請輸入有效的電子郵件地址",
  }),
  password: z.string().min(8, {
    message: "密碼必須至少為 8 個字符",
  }),
});

export const registerSchema = signInSchema
  .extend({
    confirmPassword: z.string().min(8, {
      message: "密碼必須至少為 8 個字符",
    }),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "密碼不一致",
    path: ["confirmPassword"],
  });
