const URLUsuarios = import.meta.env.VITE_API_USUARIOS;
const URLIniciarSesion = import.meta.env.VITE_API_INICIARSESION;
const URLVerificarAdmin = import.meta.env.VITE_API_VERIFICARADMIN;
const URLReservas = import.meta.env.VITE_API_RESERVAS;
const URLHabitaciones = import.meta.env.VITE_API_HABITACIONES;

export const reservarHabitacion = async(reserva) =>{
  try {
    console.log(reserva)
    await fetch(URLReservas,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(reserva)
    })
  } 
  catch (error) {
    
  }
}
export const verificarAdministrador = async (usuario) => {
  //se recibe ya sea, el mail o dni del usuario
  try {
    const respuesta = await fetch(URLVerificarAdmin, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    const data =await respuesta.json()
    return data.rol;
  } catch (error) {
    console.error(error);
  }
};
export const registrarUsuario = async (usuarios) => {
  try {
    const respuesta = await fetch(URLUsuarios, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuarios),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
export const iniciarSesion = async (usuario) => {
  //se recibe ya sea, el mail o dni del usuario, y su contraseña
  try {
    const respuesta = await fetch(URLIniciarSesion, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const listarHabitaciones = async()=>{
  try {
    const habitaciones = await fetch(URLHabitaciones)
    const datos = await habitaciones.json()
    
    return datos
  } catch (error) {
    console.error(error)
  }
}