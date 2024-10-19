import React, { useContext } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { DateContext } from "../Context/DateContext";
import { Link } from "react-router-dom";
const RoomCard = ({ room }) => {
  const { fechas, formatDate } = useContext(DateContext);
  const { cart, addToCart, removeFromCart, checkElementCart } =
    useContext(CartContext);
  return (
    <Col md={12}>
      <Card className="border-2">
        <Row className="g-0">
          <Col md={4}>
            <Card.Img variant="top" src={room.image} alt="Room" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title className="fw-bold">{room.type}</Card.Title>
              <Card.Text className="text-muted">
                Sleeps {room.capacity} | {room.bed} Bed | {room.size} ft²
              </Card.Text>
              <Card.Text>{room.description}</Card.Text>
              <Link to={"/roomDetails"}>
                <p className="text-decoration-none">Room details</p>
              </Link>
              <hr />

              <h4 className="text-end mb-0">${room.price}</h4>
              <Card.Text className="text-primary mb-0">
                Bed & Breakfast
              </Card.Text>
              <Card.Text className="text-muted">
                {room.breakfast ? (
                  "No viene con desayuno"
                ) : (
                  <>
                    <i className="bi bi-egg-fried"></i> Desayuno incluido
                  </>
                )}
              </Card.Text>
              <p>{room.include}</p>

              <div className="container">
                <Button
                  variant="outline-dark"
                  style={{ borderRadius: 1 }}
                  className="h-100 w-100 my-2"
                >
                  Ver detalles
                </Button>
                {checkElementCart(room) ? (
                  <Button
                    variant="outline-dark"
                    style={{ borderRadius: 1 }}
                    className="h-100 w-100 "
                  >
                    <i className="bi bi-check2-circle me-2"></i> Mantener la
                    habitación
                  </Button>
                ) : (
                  <Button
                    variant="outline-dark"
                    style={{ borderRadius: 1 }}
                    className="h-100 w-100 "
                    onClick={() => {
                      addToCart(room);
                    }}
                  >
                    <i className="bi bi-book me-2"></i> Reservar
                  </Button>
                )}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default RoomCard;
