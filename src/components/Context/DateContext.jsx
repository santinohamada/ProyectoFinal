import React, { useState, createContext } from "react";

const DateContext = createContext();

const DateProvider = ({ children }) => {
  const [fechas, setFechas] = useState([new Date(), new Date()]); // Inicializa con fechas actuales

  const ISOFormat = () => {
    const fechasFormateadas = fechas.map((fecha) => {
      // Convierte el objeto Date a una cadena en formato "dd/MM/yyyy HH:mm"
      const fechaStr = fecha
        .toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
        .replace(",", "");

      const [fechaenISo, horaISO] = fechaStr.split(" ");
      const [diaISO, mesISO, anioISO] = fechaenISo.split("/");
      const [hora, minuto] = horaISO.split(":");
      const fechaISO = new Date(
        Date.UTC(anioISO, mesISO - 1, diaISO, hora, minuto)
      ).toISOString();
      return fechaISO;
    });
    return fechasFormateadas;
  };

  const formatDate = () => {
    const fechasFormateadas = fechas.map((fecha) => {
      const day = fecha.getDate();
      const year = fecha.getFullYear();
      const month = fecha.getMonth() + 1;

      return { day, year, month };
    });

    return fechasFormateadas;
  };

  const data = {
    fechas,
    setFechas,
    formatDate,
    ISOFormat,
  };

  return <DateContext.Provider value={data}>{children}</DateContext.Provider>;
};

export { DateContext, DateProvider };
