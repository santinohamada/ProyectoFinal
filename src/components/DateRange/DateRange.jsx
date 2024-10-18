import React, { useContext } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css"; // Asegúrate de importar los estilos globales de RSuite
import { DateContext } from "../Context/DateContext";

const DateRange = () => {
  const { beforeToday} = DateRangePicker;
  const { fechas, setFechas, } = useContext(DateContext);
 
  return (
    <DateRangePicker
      value={fechas} 
      shouldDisableDate={beforeToday()}
      format="dd/MM/yyyy"
      onChange={setFechas} 
    />
  );
};

export default DateRange;
