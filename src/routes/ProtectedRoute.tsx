import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuth, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return null;
  if (!isAuth) {
    return <Navigate to="/signIn" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
