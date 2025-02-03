import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../zustand/auth/auth";

const ProtectedRoute = ({ children }) => {

  const {token} = useAuthStore.getState();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
