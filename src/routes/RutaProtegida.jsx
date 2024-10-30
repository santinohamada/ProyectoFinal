import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/Context/UserContext";

const RutaProtegida = ({ children }) => {
  const { isAdmin, loading } = useContext(UserContext);

  if (loading) return <div>Cargando...</div>; // Mostrar un indicador de carga mientras espera
  if (isAdmin) return children;

  return <Navigate to={"/iniciarSesion"}></Navigate>;
};

export default RutaProtegida;
