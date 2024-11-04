import React, { useContext } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const RoomCard = ({ room, index }) => {
  const variants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    visible: ({ delay }) => ({
      opacity: 1,
      transition: {
        delay,
        duration: 1,
      },
    }),
  };
  const { addToCart, checkElementCart } = useContext(CartContext);
  return (
    <motion.div
      variants={variants}
      className="motionli"
      initial="hidden"
      exit="hidden"
      animate="visible"
      custom={{ delay: (index + 1) * 0.4 }}
      key={index}
    >
      <Col md={12}>
        <Card className="border-2">
          <Row className="g-0">
            <Col lg={5}>
              <Card.Img
                variant="top"
                style={{ height: "100%" }}
                src={room.image}
                alt="Room"
              />
            </Col>
            <Col lg={7}>
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
                    <>
                      <i className="bi bi-egg-fried"></i> Desayuno incluido
                    </>
                  ) : (
                    "No viene con desayuno"
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
    </motion.div>
  );
};

export default RoomCard;
