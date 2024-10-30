import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/Context/UserContext";

const RutaProtegida = ({ children }) => {
  const { isAdmin, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate("/iniciarSesion");
    }
  }, [isAdmin, loading, navigate]);

  if (loading) return <div>Cargando...</div>;

  return children;
};

export default RutaProtegida;
