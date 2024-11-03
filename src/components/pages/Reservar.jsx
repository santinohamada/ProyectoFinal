import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import DateRange from "../DateRange/DateRange.jsx";
import RoomCard from "../ReservarComponents/RoomCard.jsx";
import CartCard from "../ReservarComponents/CartCard.jsx";
import SelectPersonas from "../ReservationForm/SelectPersonas.jsx";
import { FiltersContext } from "../Context/FiltersContext.jsx";
import { listarHabitacionesDisponibles } from "../../helpers/queries.js";
import { DateContext } from "../Context/DateContext.jsx";
import { CartContext } from "../Context/CartContext.jsx";

const Reservar = () => {
  const [rooms, setRooms] = useState([]);
  const { ISOFormat, fechas } = useContext(DateContext);
  const { clearCart } = useContext(CartContext);
  const fechasISO = ISOFormat();
  const { handleOrderByPrice, orderByPrice } = useContext(FiltersContext);

  useEffect(() => {
    clearCart()
    const roomList = async () => {
      const habitaciones = await listarHabitacionesDisponibles(fechasISO);
      setRooms(habitaciones);
    };
    roomList();
  }, [fechas]);

  return (
    <Container className="my-4 componentePagina">
      <Row className="mb-4">
        <Col sm={4}>
          <Form.Group controlId="capacityFilter">
            <Form.Label>Filtrar por capacidad</Form.Label>
            <SelectPersonas></SelectPersonas>
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group controlId="priceSort">
            <Form.Label>Ordenar por precio</Form.Label>
            <Form.Select onChange={handleOrderByPrice} value={orderByPrice}>
              <option value="A">Precio ascendente</option>
              <option value="D">Precio descendente</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group controlId="priceSort">
            <div className="mb-2 w-100">Checkin-Checkout</div>
            <DateRange />
          </Form.Group>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={8}>
          <Row className="g-4">
            {Array.isArray(rooms) && rooms.length > 0
              ? rooms.map((room) => (
                  <RoomCard key={room._id} room={room}></RoomCard>
                ))
              : ""}
          </Row>
        </Col>

        <CartCard></CartCard>
      </Row>
    </Container>
  );
};

export default Reservar;
