import React, { useEffect, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import {
  borrarHabitacion,
  editarHabitacion,
  obtenerUsuario,
} from "../helpers/queries.js";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const ListaHabitaciones = ({ habitacion, reserva, estadoHabitacion }) => {
  const {
    register: registerHabitacion,
    handleSubmit: handleSubmitHabitacion,
    setValue: setValueHabitacion,
    formState: { errors: errorsHabitacion },
  } = useForm();

  const {
    register: registerUsuario,
    handleSubmit: handleSubmitUsuario,
    setValue: setValueUsuario,
    formState: { errors: errorsUsuario },
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

    return `${anio}-${mes}-${dia}T${horas}:${minutos}:${segundos}.${milisegundos}Z`;
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

  const editarHabitacionAPI = async (habitacionEditada) => {
    Swal.fire({
      title: "Deseas aplicar estos cambios?",
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aplicar cambios.",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const respuesta = await editarHabitacion(
            habitacionEditada,
            habitacion._id
          );

          if (respuesta.status === 200) {
            handleCloseModal();
            estadoHabitacion(true)
            setEditable(false);
            Swal.fire({
              title: `La habitacion ${habitacion.roomNumber} fue editada con exito!`,
              icon: "success",
            });
            return;
          }

          Swal.fire({
            title: "Ocurrió un error al guardar!",
            icon: "error",
          });
        } catch (error) {
          console.error(error);
        }
      }
    });
   
  };

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
      await Promise.all([datosReserva()]);
    };
    cargarDatos();
  }, [reserva]);

  useEffect(() => {
    estadoHabitacion(false);
  }, [estadoHabitacion]);

  useEffect(() => {
    if (usuario.nombre) {
      setValueUsuario("nombre", usuario.nombre);
      setValueUsuario("apellido", usuario.apellido);
      setValueUsuario("dni", usuario.dni);
      setValueUsuario("email", usuario.email);
      setValueUsuario("domicilio", usuario.domicilio);
    }
  }, [usuario]);

  const handleLinkClick = (e) => {
    e.preventDefault(); // Previene el redireccionamiento
    setShowModal(true); // Muestra el modal si estadoReserva es false
    setValueHabitacion("roomNumber", habitacion.roomNumber);
    setValueHabitacion("type", habitacion.type);
    setValueHabitacion("price", habitacion.price);
    setValueHabitacion("capacity", habitacion.capacity);
    setValueHabitacion("image", habitacion.image);
    setValueHabitacion("description", habitacion.description);
    if (estaDisponible) {
      setEditableSegundoModal(true);
    }
  };

  const habilitarForm = (e) => {
    e.preventDefault();
    setEditable(true);
  };
  const mostrarSegundoForm = (e) => {
    user();
    e.preventDefault();
    setShowSegundoModal(true);
  };

  const borrarHabitacionAPI = async () => {
    Swal.fire({
      title: `¿Deseas eliminar la habitacion: ${habitacion.roomNumber}? `,
      text: "Esta acción no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aplicar cambios.",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const respuesta = await borrarHabitacion(habitacion._id);

          if (respuesta.status === 200) {
            estadoHabitacion(true);
            Swal.fire({
              title: "La habitacion fue eliminada con exito!",
              icon: "success",
            });
            return;
          }

          Swal.fire({
            title: "Ocurrió un error al guardar!",
            icon: "error",
          });
        } catch (error) {
          console.error(error);
        }
      }
    });
    
  };

  const handleCloseModal = () => setShowModal(false);
  const handleCloseSegundoModal = () => setShowSegundoModal(false);

  return (
    <div className=" d-flex col-6 justify-content-center p-1 my-1 col-lg-2 col-md-4">
      <Card className="card-administracion">
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
            state={{ estadoReserva }}
            onClick={handleLinkClick}
          >
            Ver Info
          </Link>

          <div
            className={`badge p-0 ${
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

      {/* Primer Modal */}
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
          <Form onSubmit={handleSubmitHabitacion(editarHabitacionAPI)}>
            <Form.Group className="mb-3" controlId="formBasicNro">
              <Form.Label>Habitacion Numero</Form.Label>
              <Form.Control
                {...registerHabitacion("roomNumber", {
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
              <Form.Text>{errorsHabitacion.numero?.message}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTipo">
              <Form.Label>Tipo</Form.Label>
              <Form.Control
                {...registerHabitacion("type", {
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
              <Form.Text>{errorsHabitacion.tipo?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrecio">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                {...registerHabitacion("price", {
                  required: "El precio es requerido",
                  min: { value: 100, message: "Valor minimo 100" },
                  max: { value: 2000, message: "Valor maximo 2000" },
                })}
                type="text"
                placeholder={habitacion.price}
                disabled={!editable}
              />
              <Form.Text>{errorsHabitacion.precio?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCapacidad">
              <Form.Label>Capacidad PAX</Form.Label>
              <Form.Control
                {...registerHabitacion("capacity", {
                  required: "La cantidad de pasajeros es requerida",
                  min: { value: 1, message: "Minimo 1 pasajero" },
                  max: { value: 5, message: "Maximo 5 pasajeros" },
                })}
                type="text"
                placeholder={habitacion.capacity}
                disabled={!editable}
              />
              <Form.Text>{errorsHabitacion.capacidad?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImagen">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                {...registerHabitacion("image", {
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
              <Form.Text>{errorsHabitacion.imagen?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescripcion">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                {...registerHabitacion("description", {
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
              <Form.Text>{errorsHabitacion.descripcion?.message}</Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              onClick={
                !editableSegundoModal ? mostrarSegundoForm : habilitarForm
              }
            >
              {!editableSegundoModal ? "Info Pasajeros" : "Editar"}
            </Button>
            {editableSegundoModal && (
              <Button onClick={borrarHabitacionAPI}>Borrar</Button>
            )}

            <Button variant="secondary" type="submit" hidden={!editable}>
              Guardar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      {/* Segundo Modal */}
      <Modal
        show={showSegundoModal}
        onHide={handleCloseSegundoModal}
        style={{ position: "fixed", left: "55%", top: "0%", width: "30%" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Formulario Adicional</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitUsuario}>
            <Form.Group className="mb-3" controlId="secondFormNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                disabled
                type="text"
                placeholder="Nombre"
                {...registerUsuario("nombre", {
                  required: "Nombre es un dato requerido",
                })}
              />
              <Form.Text>{errorsUsuario.nombre?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondFormApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                disabled
                type="text"
                placeholder="Apellido"
                {...registerUsuario("apellido", {
                  required: "Apellido es un dato requerido",
                })}
              />
              <Form.Text>{errorsUsuario.apellido?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondFormDNI">
              <Form.Label>DNI</Form.Label>
              <Form.Control
                disabled
                type="text"
                placeholder="DNI"
                {...registerUsuario("dni", {
                  required: "DNI es un dato requerido",
                })}
              />
              <Form.Text>{errorsUsuario.dni?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondFormEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                disabled
                type="text"
                placeholder="Email"
                {...registerUsuario("email", {
                  required: "Email es dato requerido",
                })}
              />
              <Form.Text>{errorsUsuario.email?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondFormDomicilio">
              <Form.Label>Domicilio</Form.Label>
              <Form.Control
                disabled
                type="text"
                placeholder="Domicilio"
                {...registerUsuario("domicilio", {
                  required: "Domicilio es dato requerido",
                })}
              />
              <Form.Text>{errorsUsuario.domicilio?.message}</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ListaHabitaciones;
