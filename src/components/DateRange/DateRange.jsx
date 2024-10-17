import React from 'react';
import { DateRangePicker } from 'rsuite';
import isAfter from 'date-fns/isAfter';

import 'rsuite/dist/rsuite.min.css';  // Asegúrate de importar los estilos globales de RSuite

const DateRange = () => {
    const { beforeToday} = DateRangePicker;
  const [fechas, setFechas] = React.useState([
    new Date(''),
    new Date(''),
  ]);

  return (
    <DateRangePicker
      value={fechas}
      format="dd/MM/yyyy"
      onChange={setFechas}
      shouldDisableDate={beforeToday()}
    />
  );
};

export default DateRange;
