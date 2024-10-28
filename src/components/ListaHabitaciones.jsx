import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { obtenerReservas, reservarHabitacion } from '../helpers/queries.js';
import { Link } from 'react-router-dom';





const ListaHabitaciones = ({habitacion,reserva}) => {
  const fecha = new Date()
  const formatearFecha = (fecha) => {
    const anio = fecha.getUTCFullYear();
    const mes = String(fecha.getUTCMonth() + 1).padStart(2, '0'); 
    const dia = String(fecha.getUTCDate()).padStart(2, '0');
    const horas = String(fecha.getUTCHours()).padStart(2, '0');
    const minutos = String(fecha.getUTCMinutes()).padStart(2, '0');
    const segundos = String(fecha.getUTCSeconds()).padStart(2, '0');
    const milisegundos = String(fecha.getUTCMilliseconds()).padStart(3, '0');
    

    return `${anio}-${mes}-${dia}T${horas}:${minutos}:${segundos}Z.${milisegundos}`;
  }
  const fechaFormateada = formatearFecha(fecha)
  //console.log(reserva)
  
  const [estaReservada, setEstaReservada] = useState(null)
  const [estadoReserva, setEstadoReserva] = useState([])

  const datosReserva = ()=>{
   
 
    
    const res = reserva.filter((reserva) =>
      reserva.HabitacionesConReserva.some(
        (habitacionReserva) =>
          habitacionReserva.roomId === habitacion._id &&
          habitacionReserva.checkOut > fechaFormateada
      )
    );
    setEstadoReserva(res)
    
    if (res.length > 0) {
      setEstaReservada(false); // Hay reservas activas (checkOut posterior a la fecha actual)
    } else {
      setEstaReservada(true);  // No hay reservas activas o no hay coincidencia con el roomId
    }
    
   

  }  

      useEffect(()=>{
        datosReserva()
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