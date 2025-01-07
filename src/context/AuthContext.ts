import { createContext } from "react";

interface AuthContextType {
  uid: string | null;
  isAuth: boolean;
  isLoading: boolean;
  signIn: (uid: string, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
