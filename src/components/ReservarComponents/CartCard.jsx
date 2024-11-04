import React, { useContext, useEffect } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import { DateContext } from "../Context/DateContext";
import { FiltersContext } from "../Context/FiltersContext.jsx";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext.jsx";
import { reservarHabitacion } from "../../helpers/queries.js";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
const CartCard = () => {
  const navigation = useNavigate();
  const { formatDate, ISOFormat } = useContext(DateContext);
  const { personas } = useContext(FiltersContext);
  const fechasFormateadas = formatDate();
  const { cart, removeFromCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const fechasEnISO = ISOFormat();

  return (
    <Col md={4}>
      <motion.div
        initial={{ x: "100vh" }}
        animate={{ x: "0" }}
        transition={{ duration: 1 }}
      >
        <Card className="border-2">
          <Card.Body>
            <Card.Title className="fw-bold">
              Tu carrito: {cart.length}
            </Card.Title>
            {cart.length > 0 ? (
              <>
                <Card.Text>Total: ${cart[0].price + cart[0].taxes}</Card.Text>
                <Card.Text className="text-muted">
                  Incluye tasas e impuestos
                </Card.Text>
                <hr />
                <Card.Text className="fw-bold">{cart[0].type}</Card.Text>
                <Card.Text>
                  Precio: ${cart[0].price}.00 <br />
                  {cart[0].breakfast ? "desayuno en la cama" : ""} <br />
                </Card.Text>
                <Card.Text className="text-muted">
                  Tasas e impuestos: ${cart[0].taxes}.00
                </Card.Text>
                <Card.Text className="text-muted">
                  {`${fechasFormateadas[0].day}/${fechasFormateadas[0].month}/${fechasFormateadas[0].year}`}{" "}
                  -{" "}
                  {`${fechasFormateadas[1].day}/${fechasFormateadas[1].month}/${fechasFormateadas[1].year}`}
                  ,{" "}
                  {personas === 1
                    ? `${personas} persona`
                    : `${personas} personas`}
                </Card.Text>
                <Button
                  variant="link"
                  onClick={() => {
                    removeFromCart(cart[0]);
                  }}
                  className="text-danger"
                >
                  Remover
                </Button>
                <Button
                  variant="link"
                  onClick={() => {
                    if (!user) {
                      navigation("/iniciarSesion");
                    } else {
                      Swal.fire({
                        title: "Estas seguro?",
                        text: "Luego no hay reembolso!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Si, deseo reservar!",
                      }).then(async (result) => {
                        if (result.isConfirmed) {
                          try {
                            const reserva = await reservarHabitacion({
                              userId: user.id,
                              roomId: cart[0]._id,
                              roomNumber: cart[0].roomNumber,
                              checkIn: fechasEnISO[0],
                              checkOut: fechasEnISO[1],
                            });

                            if (reserva.status === 200) {
                              let timerInterval;
                              Swal.fire({
                                title: "Su reserva ha sido guardada!",
                                html: "Esta ventana se cerrará en <b></b> milisegndos. Serás redirigido al incio",
                                timer: 1000,
                                timerProgressBar: true,
                                didOpen: () => {
                                  Swal.showLoading();
                                  const timer =
                                    Swal.getPopup().querySelector("b");
                                  timerInterval = setInterval(() => {
                                    timer.textContent = `${Swal.getTimerLeft()}`;
                                  }, 100);
                                },
                                willClose: () => {
                                  clearInterval(timerInterval);
                                },
                              }).then((result) => {
                                /* Read more about handling dismissals below */
                                if (
                                  result.dismiss === Swal.DismissReason.timer
                                ) {
                                  navigation("/");
                                }
                              });
                            } else {
                              Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Hubo un fallo al guardar tu reserva!",
                              });
                            }
                          } catch (error) {
                            console.error(error);
                          }
                        }
                      });
                    }
                  }}
                  className="text-success"
                >
                  Pagar
                </Button>
              </>
            ) : (
              <>
                <Card.Text>Total: $0</Card.Text>
                <Card.Text className="text-muted">
                  Incluyendo tasas e impuestos
                </Card.Text>
                <hr />
                <Card.Text className="fw-bold">-</Card.Text>
                <Card.Text className="text-muted">
                  Tasas e impuestos: $0.00
                </Card.Text>
                <Card.Text className="text-muted">
                  {`${fechasFormateadas[0].day}/${fechasFormateadas[0].month}/${fechasFormateadas[0].year}`}{" "}
                  -{" "}
                  {`${fechasFormateadas[1].day}/${fechasFormateadas[1].month}/${fechasFormateadas[1].year}`}
                  ,{" "}
                  {personas === 1
                    ? `${personas} persona`
                    : `${personas} personas`}
                </Card.Text>
              </>
            )}
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
};

export default CartCard;
