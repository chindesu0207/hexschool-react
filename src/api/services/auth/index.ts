import axiosClient from "@/api/axiosClient";
import {
  CheckAuthResponse,
  LogoutResponse,
  SignInResponse,
  SignInSchemaType,
} from "./types";

export const authApi = {
  checkAuth: async () => {
    const res: CheckAuthResponse = await axiosClient.post("/api/user/check");
    return res;
  },
  signIn: async (user: SignInSchemaType) => {
    const res: SignInResponse = await axiosClient.post("/admin/signin", user);
    return res;
  },
  logout: async () => {
    const res: LogoutResponse = await axiosClient.post("/logout");
    return res;
  },
};
