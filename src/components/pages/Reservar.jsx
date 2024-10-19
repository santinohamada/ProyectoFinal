import React, { useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import DateRange from "../DateRange/DateRange";
import RoomCard from "../ReservarComponents/roomCard";
import CartCard from "../ReservarComponents/CartCard";
import SelectPersonas from "../ReservationForm/SelectPersonas";
import { FiltersContext } from "../Context/FiltersContext";

const Reservar = () => {
  const { handleOrderByPrice, orderByPrice } = useContext(FiltersContext);

  const rooms = [
    {
      id: 1,
      type: "Habitación en el Palacio",
      price: 8100,
      nights: 9,
      capacity: 2,
      image:
        "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg",
      description:
        "Tonos cálidos caracterizan esta acogedora habitación con vistas al patio de la villa principal.",
      size: 400,
      bed: 1,
      taxes: 810,
      breakfast: true,
      include:
        "Incluye alojamiento, desayuno diario y acceso a todas las instalaciones.",
    },
    {
      id: 2,
      type: "Room ABUSO",
      price: 1000,
      nights: 9,
      capacity: 1,
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      description: "Probando",
      size: 400,
      bed: 1,
      taxes: 810,
      breakfast: false,
      include:
        "Incluye alojamiento, desayuno diario y acceso a todas las instalaciones.",
    },
  ];

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
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room}></RoomCard>
            ))}
          </Row>
        </Col>

        <CartCard></CartCard>
      </Row>
    </Container>
  );
};

export default Reservar;
