import React, { useEffect, useState } from 'react';
import { listarHabitaciones } from '../../helpers/queries.js';
import ListaHabitaciones from '../ListaHabitaciones.jsx';



const Administracion = () => {
  const [listaHabitaciones,setListaHabitaciones]=useState([])

const habitaciones = async ()=>{
    const {habitaciones} = await listarHabitaciones()
   
    setListaHabitaciones(habitaciones)
    
}

useEffect(()=>{
    habitaciones()
},[])

    return (
        <>
        <section className='componentePagina d-flex flex-row gap-2'>
        {
        listaHabitaciones.map((habitacion,posicion)=>(<ListaHabitaciones habitacion={habitacion} key={posicion}></ListaHabitaciones>))
        }

        </section>
        </>
    );
};

export default Administracion;