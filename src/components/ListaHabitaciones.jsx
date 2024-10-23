import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { obtenerReservas, reservarHabitacion } from '../helpers/queries.js';


const ListaHabitaciones = ({habitacion,reserva}) => {
  
  
    const estaReservada = reserva.includes(habitacion.numberRoom)
    
    


    return (
      <div className=' d-flex flex-column'>

        <Card className=' card-administracion' style={{ width: '10rem'}}>
      <Card.Img variant="top" className='card-img-fixed' src={habitacion.image} />
      <Card.Body className='d-flex flex-column h-100'>

        <Card.Title>{habitacion.numberRoom}</Card.Title>
        
        <Card.Text>
          {habitacion.description}
        </Card.Text>
        
        

        <Button className='mt-auto' variant="primary">Ver</Button>
        <div className={`badge ${estaReservada ? 'disponible' : 'no-disponible'}`}>
          {estaReservada===null ? 'Cargando..': estaReservada ? 'Disponible' : 'No Disponible'}

        </div>
       
      </Card.Body>
    </Card>
      </div>
    );
};

export default ListaHabitaciones;