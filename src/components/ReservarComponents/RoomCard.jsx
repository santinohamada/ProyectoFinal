import React, { useContext } from 'react';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { CartContext } from '../Context/CartContext';
import { DateContext } from '../Context/DateContext';
const RoomCard = ({room}) => {
    const { fechas, formatDate } = useContext(DateContext);
    const {cart,addToCart,removeFromCart,checkElementCart} = useContext(CartContext)
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
                  <a href="#" className="text-decoration-none">
                    Room details
                  </a>
                  <hr />

                  <h4 className="text-end mb-0">${room.price}</h4>
                  <Card.Text className="text-primary mb-0">
                    Bed & Breakfast
                  </Card.Text>
                  <Card.Text className="text-muted">
                    <i className="bi bi-egg-fried"></i> Breakfast Included
                  </Card.Text>
                  <p>
                    Includes accommodation, daily breakfast and access to all
                    the facilities.
                  </p>

                  <div className="container">
                    <Button
                      variant="outline-dark"
                      style={{ borderRadius: 1 }}
                      className="h-100 w-100 my-2"
                    >
                      Ver detalles
                    </Button>
                    {
                        (checkElementCart(room))?  <Button
                        variant="outline-dark"
                        style={{ borderRadius: 1 }}
                        className="h-100 w-100 "
                      >
                        <i className="bi bi-check2-circle me-2"></i> Mantener la
                        habitación
                      </Button> 
                      :
                    <Button
                      variant="outline-dark"
                      style={{ borderRadius: 1 }}
                      className="h-100 w-100 "
                      onClick={()=>{addToCart(room)
                      console.log(room)}}
                    >
                      <i className="bi bi-book me-2"></i> Reservar
                    </Button>
                    }
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
    );
};

export default RoomCard;