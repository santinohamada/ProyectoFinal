import React, { useEffect, useState } from 'react';

import {  Card } from 'react-bootstrap';
import { obtenerReservas, reservarHabitacion } from '../helpers/queries.js';

import { Link } from 'react-router-dom';


const ListaHabitaciones = ({habitacion,reserva}) => {
  
  
    const estaReservada = reserva.includes(habitacion.roomNumber)
    const [estadoReserva, setEstadoReserva] = useState([])
    const reservado = async () =>{
        const respuesta = await obtenerReservas()
        const datos = await respuesta.json()
        setEstadoReserva(datos)
        console.log(estadoReserva+"estadoreserva")

    }

    useEffect(()=>{
        reservado()
    },[])

    return (
      <div className=' d-flex flex-column'>

        <Card className=' card-administracion' style={{ width: '10rem'}}>
      <Card.Img variant="top" className='card-img-fixed' src={habitacion.image} />
      <Card.Body className='d-flex flex-column h-100'>

        <Card.Title>{habitacion.roomNumber}</Card.Title>
        
        <Card.Text>
          {habitacion.description}
        </Card.Text>
        
        

        <Link className='mt-auto' variant="primary" to={"/verhabitaciones"} state={{estadoReserva}}>Ver</Link>
        <div className={`badge ${estaReservada ? 'disponible' : 'no-disponible'}`}>
          {estaReservada===null ? 'Cargando..': estaReservada ? 'Disponible' : 'No Disponible'}

        </div>
       
      </Card.Body>
    </Card>
      </div>
    );
};

export default ListaHabitaciones;