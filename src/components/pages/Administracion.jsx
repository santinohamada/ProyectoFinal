import React, { useEffect, useState } from 'react';
import { listarHabitaciones,listarHabitacionesDisponibles } from '../../helpers/queries.js';
import ListaHabitaciones from '../listaHabitaciones.jsx';



const Administracion = () => {
  const [listaHabitaciones,setListaHabitaciones]=useState([])
  const [reservaAPI, setReservaAPI]=useState([])

  const reserva = async()=>{
    try {
      const respuesta = await listarHabitacionesDisponibles()
    
      const datos = await respuesta.json()
    
      setReservaAPI(datos)
     
    } catch (error) {
      
    }
  }

const habitaciones = async ()=>{
    const {habitaciones} = await listarHabitaciones()
   
    setListaHabitaciones(habitaciones)
    
}

useEffect(() => {
    const cargarDatos = async () => {
      await Promise.all([reserva(), habitaciones()]); // Ejecuta ambas funciones en paralelo
    };
    
     cargarDatos(); // Llama a la función para cargar datos
  }, []);
    return (
        <>
        <section className='componentePagina d-flex flex-row gap-2'>
        {
 listaHabitaciones.map((habitacion,posicion)=>(<ListaHabitaciones habitacion={habitacion} key={habitacion._id} reserva={reservaAPI}></ListaHabitaciones>))}

        </section>
        </>
    );
};

export default Administracion;