import React, { useContext } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css"; // Asegúrate de importar los estilos globales de RSuite
import { DateContext } from "../Context/DateContext";

const DateRange = () => {
  const { fechas, setFechas } = useContext(DateContext);
  console.log(fechas);
  return (
    <DateRangePicker
      value={fechas} // Asegúrate de que esto sea un array de objetos Date
      format="dd/MM/yyyy"
      onChange={setFechas} // Se espera que setFechas reciba el nuevo rango de fechas
    />
  );
};

export default DateRange;
