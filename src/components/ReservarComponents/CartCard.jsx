import React, { useContext } from 'react';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { CartContext } from '../Context/CartContext';
import { DateContext } from '../Context/DateContext';
import { FiltersContext } from '../Context/FiltersContext';
const CartCard = () => {
    const { fechas, formatDate } = useContext(DateContext);
    const { personas, handleChangePersonas, handleOrderByPrice, orderByPrice } =
    useContext(FiltersContext);
    const fechasFormateadas = formatDate();
    const {cart,addToCart,removeFromCart,checkElementCart} = useContext(CartContext)
    return (
        <Col md={4}>
        <Card className="border-2">
          <Card.Body>
            <Card.Title className="fw-bold">Your Cart: {cart.length}</Card.Title>
            {cart.length > 0 ? (
              <>
                <Card.Text>Total: €{cart[0].price + cart[0].taxes}</Card.Text>
                <Card.Text className="text-muted">Including taxes and fees</Card.Text>
                <hr />
                <Card.Text className="fw-bold">{cart[0].type}</Card.Text>
                <Card.Text>
                  €{cart[0].price}.00 <br />
                  Bed & Breakfast <br />
                  {cart[0].nights} NIGHTS STAY
                </Card.Text>
                <Card.Text className="text-muted">Taxes and Fees: €{cart[0].taxes}.00</Card.Text>
                <Card.Text className="text-muted">
                  {`${fechasFormateadas[0].day}/${fechasFormateadas[0].month}/${fechasFormateadas[0].year}`}{" "}
                  -{" "}
                  {`${fechasFormateadas[1].day}/${fechasFormateadas[1].month}/${fechasFormateadas[1].year}`}
                  , {personas} Personas
                </Card.Text>
                <Button variant="link" onClick={() => removeFromCart(cart[0])} className="text-danger">
                  Remover
                </Button>
                <Button variant="link" onClick={() => removeFromCart(cart[0])} className="text-success">
                  Pagar
                </Button>
              </>
            ) : (
              <>
                <Card.Text>Total: €0</Card.Text>
                <Card.Text className="text-muted">Including taxes and fees</Card.Text>
                <hr />
                <Card.Text className="fw-bold">-</Card.Text>
                <Card.Text>€0.00 <br /> Bed & Breakfast <br /> - NIGHTS STAY</Card.Text>
                <Card.Text className="text-muted">Taxes and Fees: €0.00</Card.Text>
                <Card.Text className="text-muted">
                  {`${fechasFormateadas[0].day}/${fechasFormateadas[0].month}/${fechasFormateadas[0].year}`}{" "}
                  -{" "}
                  {`${fechasFormateadas[1].day}/${fechasFormateadas[1].month}/${fechasFormateadas[1].year}`}
                  , {personas} Personas
                </Card.Text>
              </>
            )}
          </Card.Body>
        </Card>
      </Col>
    );
};

export default CartCard;