import React, { createContext } from "react";

const DateContext = createContext();

const DateProvider = ({ children }) => {
  const [fechas, setFechas] = React.useState([new Date(), new Date()]); // Inicializa con fechas actuales
  const formatDate = () => {

    const fechasFormateadas = fechas.map((fecha) => {
      const day = fecha.getDate();
      const year = fecha.getFullYear();
      const month = fecha.getMonth();
      return { day, year, month };
    });

    return fechasFormateadas;
  };
  const data = {
    fechas,
    setFechas,
    formatDate,
  };

  return <DateContext.Provider value={data}>{children}</DateContext.Provider>;
};

export { DateContext, DateProvider };
