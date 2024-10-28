import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { obtenerReservas, reservarHabitacion } from '../helpers/queries.js';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';








const ListaHabitaciones = ({habitacion,reserva}) => {
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
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

  function fechaBadge(fecha) {
    const date = new Date(fecha);
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0
    const año = String(date.getFullYear()).slice(-2); // Obtiene los últimos 2 dígitos
  
    return `${dia}/${mes}/${año}`;
  }
  const fechaFormateada = formatearFecha(fecha)
  //console.log(reserva)
  
  const [estaDisponible, setEstaDisponible] = useState(null)
  const [estadoReserva, setEstadoReserva] = useState([])
  const [showModal, setShowModal] = useState(false)
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
  
  useEffect(() => {
    datosReserva();
  }, [reserva]);
        
  const handleLinkClick = (e) => {
    if (estaDisponible) {
      e.preventDefault(); // Previene el redireccionamiento
      setShowModal(true); // Muestra el modal si estadoReserva es false
    }
  };

  const handleCloseModal = () => setShowModal(false);
     
      return (
        <div className=' d-flex flex-column'>
  
          <Card className=' card-administracion' style={{ width: '10rem'}}>
        <Card.Img variant="top" className='card-img-fixed' src={habitacion.image} />
        <Card.Body className='d-flex flex-column h-100'>
  
          <Card.Title>{habitacion.roomNumber}</Card.Title>
          
          <Card.Text>
            {habitacion.description}
          </Card.Text>
          
          
  
          <Link
            className='mt-auto'
            variant="primary"
            to={estaDisponible ? "#"  : "/verhabitaciones"}
            state={{ estadoReserva }}
            onClick={handleLinkClick}
          >
            Ver Info
          </Link>

     
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Información de la Habitacion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicNro">
        <Form.Label>Habitacion Numero</Form.Label>
        <Form.Control type="text" placeholder={habitacion.roomNumber} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTipo">
        <Form.Label>Tipo</Form.Label>
        <Form.Control type="text" placeholder={habitacion.type} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="text" placeholder={habitacion.price} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCapacidad">
        <Form.Label>Capacidad PAX</Form.Label>
        <Form.Control type="text" placeholder={habitacion.capacity} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicImagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" placeholder={habitacion.image} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescripcion">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" placeholder={habitacion.description}/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>


          <div className={`badge ${estaDisponible ? 'disponible' : 'no-disponible'}`}>
  {estaDisponible === null ? (
    'Cargando...'
  ) : estaDisponible ? (
    'Disponible'
  ) : (
    <>
      No Disponible
      <div className="fecha-no-disponible">
        hasta: {fechaBadge(estadoReserva[0]?.HabitacionesConReserva?.[estadoReserva[0].HabitacionesConReserva.length - 1]?.checkOut)}
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