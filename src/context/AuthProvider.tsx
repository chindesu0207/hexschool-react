import { useState, ReactNode, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import Cookies from "js-cookie";
import { authApi } from "@/api/services/auth";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [uid, setUid] = useState<string | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const res = await authApi.checkAuth();
        setIsAuth(res.success);
      } catch (error) {
        logout();
        console.log(error);
      }
      setIsLoading(false);
    };
    const token = Cookies.get("token");
    if (token) {
      checkToken();
    } else {
      setIsLoading(false);
    }
  }, []);

  const signIn = (newUid: string, newToken: string) => {
    setUid(newUid);
    setIsAuth(true);
    Cookies.set("token", newToken, { expires: 1 });
  };

  const logout = () => {
    Cookies.remove("token");
    setUid(null);
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider
      value={{
        uid,
        isAuth,
        isLoading,
        signIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
