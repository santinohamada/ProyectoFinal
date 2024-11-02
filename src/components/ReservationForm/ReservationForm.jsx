import React from "react";
import Form from "react-bootstrap/Form";
import DateRange from "../DateRange/DateRange.jsx";
import { Link } from "react-router-dom";
import SelectPersonas from "./SelectPersonas.jsx";

const ReservationForm = React.memo(({handleClose}) => {
  return (
    <div className="row">
      <div className="col-6">
        
        <label htmlFor="Personas" className="mt-3">Cantidad de Personas</label>
        <SelectPersonas />

        <div className="mt-4">CheckIn - CheckOut</div>
        <DateRange />

        <Link to={"/reservar"} onClick={handleClose} className="my-5 w-100 py-2 btn btn-outline-info">
          Comprobar disponibilidad
        </Link>
      </div>

      <div className="col-6">
        <h3 className="my-2" style={{ fontFamily: "canela-light" }}>
          ¿Quieres realizar una reserva más detallada? Escríbenos a:
          <ul className="my-3">
            <li>HOTEL@email.com</li>
            <li>+54 9 381 123 4567</li>
          </ul>
        </h3>
      </div>
    </div>
  );
});

export default ReservationForm;
