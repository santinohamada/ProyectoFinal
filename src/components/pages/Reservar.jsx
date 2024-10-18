import React, { useContext } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import useFilters from "../CustomsHooks/useFilters";
import { DateContext } from "../Context/DateContext";
import DateRange from "../DateRange/DateRange";
import { CartContext } from "../Context/CartContext";
import RoomCard from "../ReservarComponents/roomCard";
import CartCard from "../ReservarComponents/CartCard";
import { FiltersContext } from "../Context/FiltersContext";

const Reservar = () => {
  const { personas, handleChangePersonas, handleOrderByPrice, orderByPrice } =
    useContext(FiltersContext);
  const { fechas, formatDate } = useContext(DateContext);
  const { cart, addToCart, removeFromCart, checkElementCart } = useContext(CartContext);

  const fechasFormateadas = formatDate();
  console.log(fechasFormateadas);

  const rooms = [
    {
      id: 1,
      type: "Room in the Palazz",
      price: 8100,
      nights: 9,
      capacity: personas,
      image: "https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg",
      description: "Warm tones characterize this cozy room with its views across the courtyard to the main Villa.",
      size: 400,
      bed: 1,
      taxes: 810,
    },
    {
      id: 2,
      type: "Room ABUSO",
      price: 1000,
      nights: 9,
      capacity: personas,
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
      description: "Probando",
      size: 400,
      bed: 1,
      taxes: 810,
    },
  ];

  return (
    <Container className="my-4 componentePagina">
      {/* Filtros */}
      <Row className="mb-4">
        <Col sm={4}>
          <Form.Group controlId="capacityFilter">
            <Form.Label>Filtrar por capacidad</Form.Label>
            <Form.Select onChange={handleChangePersonas} value={personas}>
              <option value="all">Todas las capacidades</option>
              <option value="1">1 persona o más</option>
              <option value="2">2 personas o más</option>
              <option value="4">4 personas o más</option>
            </Form.Select>
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

      {/* Sección principal con habitaciones y carrito */}
      <Row className="g-4">
        {/* Columna de habitaciones (izquierda) */}
        <Col md={8}>
          <Row className="g-4">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room}></RoomCard>
            ))}
          </Row>
        </Col>

        {/* Columna del carrito (derecha) */}
        <CartCard></CartCard>
      </Row>
    </Container>
  );
};

export default Reservar;
