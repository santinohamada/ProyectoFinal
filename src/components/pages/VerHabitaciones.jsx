import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { obtenerUsuario } from "../../helpers/queries";

const VerHabitaciones = () => {
  const [usuario, setUsuario] = useState([]);
  const location = useLocation();
  const { estadoReserva } = location.state;

  const fechaISO = estadoReserva[0].HabitacionesConReserva[0].checkOut;
  const fecha = new Date(fechaISO);
  const idUsuario = estadoReserva[0].HabitacionesConReserva[0].userId;

  const usuarios = async () => {
    try {
      const respuesta = await obtenerUsuario(idUsuario);
      const datos = await respuesta.json();
      setUsuario(datos);
      return datos;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    usuarios();
  }, []);

  // Formato legible (Fecha y hora)
  const fechaLegible = fecha.toLocaleString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      <div>HABITACION NRO: {estadoReserva[0].roomNumber}</div>
      <div>
        HABITACION NRO: {estadoReserva[0].HabitacionesConReserva[0].roomId}
      </div>
      <div>FECHA DE SALIDA: {fechaLegible}</div>
      <div>
        NOMBRE Y APELLIDO DE LA RESERVA: {usuario.nombre} {usuario.apellido}
      </div>
      <div>DNI: {usuario.dni}</div>
      <div>DOMICILIO: {usuario.domicilio}</div>
    </>
  );
};

export default VerHabitaciones;
