import React, { useEffect, useState } from "react";
import {
  listarHabitaciones,
  listarHabitacionesDisponibles,
  listarUsuarios,
  nuevaHabitacion,
} from "../../helpers/queries.js";
import ListaHabitaciones from "../ListaHabitaciones.jsx";
import { Button, Form, Modal, Table } from "react-bootstrap";
import TablaUsuarios from "../Usuarios/TablaUsuarios.jsx";
import { useForm } from "react-hook-form";

const Administracion = () => {
  const [listaHabitaciones, setListaHabitaciones] = useState([]);
  const [reservaAPI, setReservaAPI] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [estadoHabitacion, setEstadoHabitacion] = useState(false);
  const [estadoUsuario, setEstadoUsuario] = useState(false);
  const [showTercerModal, setShowTercerModal] = useState(false);
  const {
    register: registerNuevaHabitacion,
    handleSubmit: handleSubmitNuevaHabitacion,
    formState: { errors: errorsNuevaHabitacion },
  } = useForm();

  const reserva = async () => {
    try {
      const respuesta = await listarHabitacionesDisponibles();

      setReservaAPI(respuesta);
    } catch (error) {}
  };

  const habitaciones = async () => {
    const { habitaciones } = await listarHabitaciones();

    setListaHabitaciones(habitaciones);
  };

  const listaUsuarios = async () => {
    try {
      const respuesta = await listarUsuarios();
      const usuarios = await respuesta.json();
      setUsuario(usuarios);
    } catch (error) {
      console.error(error);
    }
  };
  const handleCloseTercerModal = () => setShowTercerModal(false);

  useEffect(() => {
    const cargarDatos = async () => {
      await Promise.all([reserva(), habitaciones()]); // Ejecuta ambas funciones en paralelo
      setEstadoHabitacion(false);
    };

    cargarDatos();
    listaUsuarios();
  }, [estadoHabitacion, estadoUsuario]);

  const nuevaHabitacionAPI = async (habitacion) => {
    try {
      const respuesta = await nuevaHabitacion(habitacion);
      if (respuesta.status === 201) {
        handleCloseTercerModal();
        setEstadoHabitacion(true);
      }
    } catch (error) {}
  };

  const habitacionesOrdenadas = [...listaHabitaciones].sort(
    (a, b) => a.roomNumber - b.roomNumber
  );

  return (
    <div className="container componentePagina">
      <div className="d-flex justify-content-between align-items-baseline">
        <div className="container d-flex flex-column flex-md-row my-2 my-md-1 align-items-center justify-content-center align-md-items-baseline justify-content-md-between">

        <h3>HABITACIONES</h3>
        <span className="d-flex justify-content-end mx-5">
          <Button variant="success" onClick={() => setShowTercerModal(true)}>
            Nueva habitacion
          </Button>
        </span>
        </div>
      </div>

      <section className="row mb-5">
        {habitacionesOrdenadas.map((habitacion) => (
          <ListaHabitaciones
            habitacion={habitacion}
            key={habitacion._id}
            reserva={reservaAPI}
            estadoHabitacion={setEstadoHabitacion}
          ></ListaHabitaciones>
        ))}
      </section>
      <h3>USUARIOS</h3>
      <section>
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>DNI</th>
              <th>Domicilio</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuario.map((usuario, posicion) => (
              <TablaUsuarios
                usuario={usuario}
                key={usuario._id}
                posicion={posicion}
                setEstadoUsuario={setEstadoUsuario}
                estadoUsuario={estadoUsuario}
              ></TablaUsuarios>
            ))}
          </tbody>
        </Table>
      </section>
      {/* Tercer Modal (Nueva Habitacion) */}

      <Modal show={showTercerModal} onHide={handleCloseTercerModal}>
        <Modal.Header closeButton>
          <Modal.Title>NUEVA HABITACION</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitNuevaHabitacion(nuevaHabitacionAPI)}>
            <Form.Group className="mb-3" controlId="TercerFormNro">
              <Form.Label>Habitacion Nº</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nº de habitacion"
                {...registerNuevaHabitacion("roomNumber", {
                  required: "El numero es un dato requerido",
                })}
              />
              <Form.Text>{errorsNuevaHabitacion.roomNumber?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="TercerFormTipoHab">
              <Form.Label>Tipo de habitacion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tipo de habitacion"
                {...registerNuevaHabitacion("type", {
                  required: "el tipo es un dato requerido",
                })}
              />
              <Form.Text>{errorsNuevaHabitacion.type?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tercerFormPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Precio"
                {...registerNuevaHabitacion("price", {
                  required: "El precio es un dato requerido",
                })}
              />
              <Form.Text>{errorsNuevaHabitacion.price?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tercerFormTaxes">
              <Form.Label>Impuestos</Form.Label>
              <Form.Control
                type="text"
                placeholder="Impuestos"
                {...registerNuevaHabitacion("taxes", {
                  required: "El precio es un dato requerido",
                })}
              />
              <Form.Text>{errorsNuevaHabitacion.taxes?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tercerFormCapacidad">
              <Form.Label>Capacidad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Capacidad de la habitacion (PAX)"
                {...registerNuevaHabitacion("capacity", {
                  required: "La capacidad es dato requerido",
                })}
              />
              <Form.Text>{errorsNuevaHabitacion.capacity?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tercerFormImage">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="http://.........."
                {...registerNuevaHabitacion("image", {
                  required: "La imagen es dato requerido",
                })}
              />
              <Form.Text>{errorsNuevaHabitacion.image?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tercerFormDescription">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Habitacion triple..."
                {...registerNuevaHabitacion("description", {
                  required: "La descripcion es dato requerido",
                })}
              />
              <Form.Text>
                {errorsNuevaHabitacion.description?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tercerFormCamas">
              <Form.Label>Camas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cantidad de camas"
                {...registerNuevaHabitacion("bed", {
                  required: "La cantidad de camas es dato requerido",
                })}
              />
              <Form.Text>{errorsNuevaHabitacion.bed?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tercerFormDesayuno">
              <Form.Label>Desayuno</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Sí incluye"
                  value={true}
                  {...registerNuevaHabitacion("breakfast", {
                    required: "Debes seleccionar una opción",
                  })}
                />
                <Form.Check
                  type="radio"
                  label="No incluye"
                  value={false}
                  {...registerNuevaHabitacion("breakfast", {
                    required: "Debes seleccionar una opción",
                  })}
                />
              </div>
              <Form.Text>{errorsNuevaHabitacion.breakfast?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tercerFormServicios">
              <Form.Label>Servicios</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tv led, Wi Fi..."
                {...registerNuevaHabitacion("include", {
                  required: "Los servicios es un dato requerido",
                })}
              />
              <Form.Text>{errorsNuevaHabitacion.include?.message}</Form.Text>
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={handleCloseTercerModal}>
                Cerrar
              </Button>
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Administracion;
