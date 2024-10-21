import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/Context/UserContext";

const RutaProtegida = ({ children }) => {
  const { isAdmin } = useContext(UserContext);
  if (isAdmin) return children;

  return <Navigate to={"/iniciarSesion"}></Navigate>;
};

export default RutaProtegida;
