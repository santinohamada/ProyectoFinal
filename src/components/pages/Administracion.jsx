import React, { useEffect, useState } from "react";
import {
  listarHabitaciones,
  listarHabitacionesDisponibles,
  listarUsuarios,
} from "../../helpers/queries.js";
import ListaHabitaciones from "../listaHabitaciones.jsx";
import { Button, Table } from "react-bootstrap";
import TablaUsuarios from "../Usuarios/TablaUsuarios.jsx";


const Administracion = () => {
  const [listaHabitaciones, setListaHabitaciones] = useState([]);
  const [reservaAPI, setReservaAPI] = useState([]);
  const [usuario, setUsuario] = useState([])
  const [estadoHabitacion, setEstadoHabitacion] = useState(false)
  const [estadoUsuario, setEstadoUsuario] = useState(false)

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

  const listaUsuarios = async ()=>{
    try {
      const respuesta = await listarUsuarios()
      const usuarios = await respuesta.json()
      setUsuario(usuarios)
    } catch (error) {
      console.error(error)
    }
    
  }

  useEffect(() => {
    const cargarDatos = async () => {
      await Promise.all([reserva(), habitaciones()]); // Ejecuta ambas funciones en paralelo
    };

    cargarDatos()
    listaUsuarios()
  }, [estadoHabitacion, estadoUsuario]);

 console.log(usuario)

  return (
    <>
        <h3>HABITACIONES</h3>
      <span className="d-flex justify-content-end mx-5">
        <Button className="mt-3 mb-3">Nueva habitacion</Button>
      </span>

      <section className="componentePagina d-flex flex-row gap-2">
        {listaHabitaciones.map((habitacion, posicion) => (
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
      <Table striped bordered hover>
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
        
          {usuario.map((usuario,posicion)=>(<TablaUsuarios usuario={usuario} key={usuario._id} posicion={posicion} setEstadoUsuario={setEstadoUsuario}></TablaUsuarios>))}
        
       
      </tbody>
    </Table>
      </section>
    </>
  );
};

export default Administracion;
