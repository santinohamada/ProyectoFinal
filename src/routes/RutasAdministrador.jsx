import React from "react";
import { Route, Routes } from "react-router-dom";
import Administracion from "../components/pages/Administracion.jsx";

const RutasAdministrador = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Administracion></Administracion>}></Route>
    </Routes>
  );
};

export default RutasAdministrador;
