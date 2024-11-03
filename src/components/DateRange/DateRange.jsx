import React, { useContext } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css"; // Asegúrate de importar los estilos globales de RSuite
import { DateContext } from "../Context/DateContext";

const DateRange = () => {
  const { beforeToday} = DateRangePicker;
  const { fechas, setFechas } = useContext(DateContext);
 
  return (
    <DateRangePicker
    style={{width:"100%"}}
      value={fechas} 
      showOneCalendar
      shouldDisableDate={beforeToday()}
      format="dd/MM/yyyy HH:mm"
      onChange={setFechas} 
    />
  );
};

export default DateRange;
