// components/PrivateRoute/PrivateRoute.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
