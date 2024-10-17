import { useState } from "react";
import Form from "react-bootstrap/Form";
import "react-datepicker/dist/react-datepicker.css";
import DateRange from "../DateRange/DateRange.jsx";

const ReservationForm = () => {


  return (
    <div className="row">
      <div className="col-6">
        <label htmlFor="Habitaciones">Cantidad de Habitaciones</label>
        <Form.Select defaultValue={"2"} name="Habitaciones" id="habitaciones">
          <option value="1">1 Habitación</option>
          <option value="2">2 Habitaciones</option>
          <option value="3">3 Habitaciones</option>
          <option value="4">4 Habitaciones</option>
        </Form.Select>

        <label htmlFor="Personas" className="mt-3">Cantidad de Personas</label>
        <Form.Select defaultValue={"2"} name="Personas" id="personas">
          <option value="1">1 Persona</option>
          <option value="2">2 Personas</option>
          <option value="3">3 Personas</option>
          <option value="4">4 Personas</option>
        </Form.Select>

        <div className="mt-4">CheckIn - CheckOut</div>
        <DateRange/>

        

        <button className="my-5 w-100 py-2 btn btn-outline-info">
          Comprobar disponibilidad
        </button>
      </div>

      <div className="col-6">
        <h3 className="my-5" style={{ fontFamily: "canela-light" }}>
          ¿Quieres realizar una reserva más detallada? Escríbenos a:
          <ul className="my-3">
            <li>HOTEL@email.com</li>
            <li>+54 9 381 123 4567</li>
          </ul>
        </h3>
      </div>
    </div>
  );
};

export default ReservationForm;
