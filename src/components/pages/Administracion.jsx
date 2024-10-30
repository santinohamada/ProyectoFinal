import React, { useEffect, useState } from 'react';
import { listarHabitaciones,listarHabitacionesDisponibles } from '../../helpers/queries.js';
import ListaHabitaciones from '../listaHabitaciones.jsx';
import { Button } from 'react-bootstrap';



const Administracion = () => {
  const [listaHabitaciones,setListaHabitaciones]=useState([])
  const [reservaAPI, setReservaAPI]=useState([])

  const reserva = async()=>{
    try {
      const respuesta = await listarHabitacionesDisponibles()
    
      setReservaAPI(respuesta)
     
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
  }, [listaHabitaciones]);
    return (
        <>
        
        <span className='d-flex justify-content-end mx-5'>
          <Button className='mt-3 mb-3'>Nueva habitacion</Button>
        </span>
        
        <section className='componentePagina d-flex flex-row gap-2'>
        {
 listaHabitaciones.map((habitacion,posicion)=>(<ListaHabitaciones habitacion={habitacion} key={habitacion._id} reserva={reservaAPI}></ListaHabitaciones>))}

        </section>
        </>
    );
};

export default Administracion;