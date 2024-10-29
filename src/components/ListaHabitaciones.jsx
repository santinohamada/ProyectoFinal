import React, { useEffect, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { obtenerUsuario } from "../helpers/queries.js";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ListaHabitaciones = ({ habitacion, reserva }) => {
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const fecha = new Date();
  const formatearFecha = (fecha) => {
    const anio = fecha.getUTCFullYear();
    const mes = String(fecha.getUTCMonth() + 1).padStart(2, "0");
    const dia = String(fecha.getUTCDate()).padStart(2, "0");
    const horas = String(fecha.getUTCHours()).padStart(2, "0");
    const minutos = String(fecha.getUTCMinutes()).padStart(2, "0");
    const segundos = String(fecha.getUTCSeconds()).padStart(2, "0");
    const milisegundos = String(fecha.getUTCMilliseconds()).padStart(3, "0");

    return `${anio}-${mes}-${dia}T${horas}:${minutos}:${segundos}Z.${milisegundos}`;
  };

  function fechaBadge(fecha) {
    const date = new Date(fecha);
    const dia = String(date.getDate()).padStart(2, "0");
    const mes = String(date.getMonth() + 1).padStart(2, "0"); // Los meses comienzan desde 0
    const año = String(date.getFullYear()).slice(-2); // Obtiene los últimos 2 dígitos

    return `${dia}/${mes}/${año}`;
  }
  const fechaFormateada = formatearFecha(fecha);

  const [estaDisponible, setEstaDisponible] = useState(null);
  const [estadoReserva, setEstadoReserva] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showSegundoModal, setShowSegundoModal] = useState(false);
  const [editable, setEditable] = useState(false);
  const [editableSegundoModal, setEditableSegundoModal] = useState(false);
  const [usuario, setUsuario] = useState([]);

  const idUsuario = reserva.flatMap((reserva) =>
    reserva.HabitacionesConReserva.filter(
      (hab) => hab.roomId === habitacion._id
    ).map((hab) => hab.userId)
  );

  const datosReserva = async () => {
    const res = reserva.filter((reserva) =>
      reserva.HabitacionesConReserva.some(
        (habitacionReserva) =>
          habitacionReserva.roomId === habitacion._id &&
          habitacionReserva.checkOut > fechaFormateada
      )
    );

    setEstadoReserva(res);
    setEstaDisponible(res.length === 0);
  };

  const user = async () => {
    try {
      const respuesta = await obtenerUsuario(idUsuario[idUsuario.length - 1]);

      const datos = await respuesta.json();
      setUsuario(datos);
      return datos;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const cargarDatos = async () => {
      await Promise.all([datosReserva(), () => user()]);
    };
    cargarDatos();
  }, [reserva]);

  const handleLinkClick = (e) => {
    e.preventDefault(); // Previene el redireccionamiento
    setShowModal(true); // Muestra el modal si estadoReserva es false
    setValue("numero", habitacion.roomNumber);
    setValue("tipo", habitacion.type);
    setValue("precio", habitacion.price);
    setValue("capacidad", habitacion.capacity);
    setValue("imagen", habitacion.image);
    setValue("descripcion", habitacion.description);
    if (estaDisponible) {
      setEditableSegundoModal(true);
    }
  };

  const habilitarForm = (e) => {
    e.preventDefault();
    setEditable(true);
  };
  const mostrarSegundoForm = (e) => {
    e.preventDefault();

    setShowSegundoModal(true);
    setValue("nombre", usuario.nombre);
    setValue("apellido", usuario.apellido);
    setValue("dni", usuario.dni);
    setValue("email", usuario.email);
    setValue("domicilio", usuario.domicilio);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleCloseSegundoModal = () => setShowSegundoModal(false);

  return (
    <div className=" d-flex flex-column">
      <Card className=" card-administracion" style={{ width: "10rem" }}>
        <Card.Img
          variant="top"
          className="card-img-fixed"
          src={habitacion.image}
        />
        <Card.Body className="d-flex flex-column h-100">
          <Card.Title>{habitacion.roomNumber}</Card.Title>

          <Card.Text>{habitacion.description}</Card.Text>

          <Link
            className="mt-auto"
            variant="primary"
            // to={estaDisponible ? "#" : "/verhabitaciones"}
            state={{ estadoReserva }}
            onClick={handleLinkClick}
          >
            Ver Info
          </Link>

          <Modal
            show={showModal}
            onHide={handleCloseModal}
            style={
              estadoReserva
                ? { position: "fixed", left: "20%", top: "0%", width: "30%" }
                : ""
            }
          >
            <Modal.Header closeButton>
              <Modal.Title>Información de la Habitacion</Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "auto",
              }}
            >
              <Form>
                <Form.Group className="mb-3" controlId="formBasicNro">
                  <Form.Label>Habitacion Numero</Form.Label>
                  <Form.Control
                    {...register("numero", {
                      required: "El numero es requerido",
                      minLength: {
                        value: 3,
                        message: "Como minimo debe ingresar 3 caracteres",
                      },
                      maxLength: {
                        value: 3,
                        message: "Como maximo debe ingresar 3 caracteres",
                      },
                    })}
                    type="text"
                    placeholder={habitacion.roomNumber}
                    disabled={!editable}
                  />
                  <Form.Text>{errors.numero?.message}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTipo">
                  <Form.Label>Tipo</Form.Label>
                  <Form.Control
                    {...register("tipo", {
                      required: "El tipo es requerido",
                      minLength: {
                        value: 5,
                        message: "Como minimo debe ingresar 5 caracteres",
                      },
                      maxLength: {
                        value: 100,
                        message: "Como maximo debe ingresar 100 caracteres",
                      },
                    })}
                    type="text"
                    placeholder={habitacion.type}
                    disabled={!editable}
                  />
                  <Form.Text>{errors.tipo?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrecio">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    {...register("precio", {
                      required: "El precio es requerido",
                      min: { value: 100, message: "Valor minimo 100" },
                      max: { value: 2000, message: "Valor maximo 2000" },
                    })}
                    type="text"
                    placeholder={habitacion.price}
                    disabled={!editable}
                  />
                  <Form.Text>{errors.precio?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCapacidad">
                  <Form.Label>Capacidad PAX</Form.Label>
                  <Form.Control
                    {...register("capacidad", {
                      required: "La cantidad de pasajeros es requerida",
                      min: { value: 1, message: "Minimo 1 pasajero" },
                      max: { value: 5, message: "Maximo 5 pasajeros" },
                    })}
                    type="text"
                    placeholder={habitacion.capacity}
                    disabled={!editable}
                  />
                  <Form.Text>{errors.capacidad?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImagen">
                  <Form.Label>Imagen</Form.Label>
                  <Form.Control
                    {...register("imagen", {
                      required: "La imagen es requerida",
                      minLength: { value: 10, message: "Minimo 10 caracteres" },
                      maxLength: {
                        value: 300,
                        message: "Maximo 300 caracteres",
                      },
                    })}
                    type="text"
                    placeholder={habitacion.image}
                    disabled={!editable}
                  />
                  <Form.Text>{errors.imagen?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescripcion">
                  <Form.Label>Descripcion</Form.Label>
                  <Form.Control
                    {...register("descripcion", {
                      required: "La descripcion es requerida",
                      minLength: { value: 10, message: "Minimo 10 caracteres" },
                      maxLength: {
                        value: 500,
                        message: "Maximo 500 caracteres",
                      },
                    })}
                    type="text"
                    placeholder={habitacion.description}
                    disabled={!editable}
                  />
                  <Form.Text>{errors.descripcion?.message}</Form.Text>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  onClick={
                    !editableSegundoModal ? mostrarSegundoForm : habilitarForm
                  }
                >
                  {!editableSegundoModal ? "Info Pasajeros" : "Editar"}
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                {!editable ? "Cerrar" : "Guardar"}
              </Button>
            </Modal.Footer>
          </Modal>
          {/*SEGUNDO MODAL(DATOS USUARIO)*/}
          <Modal
            show={showSegundoModal}
            onHide={handleCloseSegundoModal}
            style={{ position: "fixed", left: "55%", top: "0%", width: "30%" }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Formulario Adicional</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="secondFormNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder="Nombre"
                    {...register("nombre", {
                      required: "Nombre es un dato requerido",
                    })}
                  />
                  <Form.Text>{errors.nombre?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="secondFormApellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder="Apellido"
                    {...register("apellido", {
                      required: "Apellido es un dato requerido",
                    })}
                  />
                  <Form.Text>{errors.apellido?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="secondFormDNI">
                  <Form.Label>DNI</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder="DNI"
                    {...register("dni", {
                      required: "DNI es un dato requerido",
                    })}
                  />
                  <Form.Text>{errors.dni?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="secondFormEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email es dato requerido",
                    })}
                  />
                  <Form.Text>{errors.email?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="secondFormDomicilio">
                  <Form.Label>Domicilio</Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder="Domicilio"
                    {...register("domicilio", {
                      required: "Domicilio es dato requerido",
                    })}
                  />
                  <Form.Text>{errors.domicilio?.message}</Form.Text>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseSegundoModal}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>

          <div
            className={`badge ${
              estaDisponible ? "disponible" : "no-disponible"
            }`}
          >
            {estaDisponible === null ? (
              "Cargando..."
            ) : estaDisponible ? (
              "Disponible"
            ) : (
              <>
                No Disponible
                <div className="fecha-no-disponible">
                  hasta:{" "}
                  {fechaBadge(
                    estadoReserva[0]?.HabitacionesConReserva?.[
                      estadoReserva[0].HabitacionesConReserva.length - 1
                    ]?.checkOut
                  )}
                </div>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListaHabitaciones;
