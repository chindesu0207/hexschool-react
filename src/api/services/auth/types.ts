import { registerSchema, signInSchema } from "@/schema/authSchema";
import { z } from "zod";

export interface CheckAuthResponse {
  success: boolean;
  uid: string;
}

export interface SignInResponse {
  success: boolean;
  message: string;
  uid: string;
  token: string;
  expired: number;
}

export interface LogoutResponse {
  success: boolean;
  message: string;
}

export type SignInSchemaType = z.infer<typeof signInSchema>;
export type RegisterSchemaType = z.infer<typeof registerSchema>;
