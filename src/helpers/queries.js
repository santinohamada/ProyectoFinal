const URLUsuarios = import.meta.env.VITE_API_USUARIOS;
const URLIniciarSesion = import.meta.env.VITE_API_INICIARSESION;
const URLVerificarAdmin = import.meta.env.VITE_API_VERIFICARADMIN;
const URLReservas = import.meta.env.VITE_API_RESERVAS;
const URLHabitaciones = import.meta.env.VITE_API_HABITACIONES;
const URLHabitacionesDisponibles = import.meta.env
  .VITE_API_HABITACIONESDISPONIBLES;

export const reservarHabitacion = async (reserva) => {
  try {
    const reservar =await fetch(URLReservas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
      body: JSON.stringify(reserva),
    });
    return reservar
  } catch (error) {
    console.error(error)
    return false
  }
};
export const verificarAdministrador = async (usuario) => {
  if (!usuario) return false;
  try {
    const respuesta = await fetch(URLVerificarAdmin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
      body: JSON.stringify(usuario),
    });
    const data = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(data.mensaje);
    }

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
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });

    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const listarHabitaciones = async () => {
  try {
    const habitaciones = await fetch(URLHabitaciones);
    const datos = await habitaciones.json();

    return datos;
  } catch (error) {
    console.error(error);
  }
};

export const obtenerReservas = async () => {
  try {
    const respuesta = await fetch(URLReservas, {
      headers: {
        "X-Token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const listarHabitacionesDisponibles = async (datos) => {
  try {
    const habitaciones = await fetch(URLHabitacionesDisponibles, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    const habitacionesJson = await habitaciones.json(datos);
    return habitacionesJson;
  } catch (error) {
    console.error(error);
  }
};

export const obtenerUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(URLUsuarios + "/" + usuario, {
      headers: {
        "X-Token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const editarHabitacion = async (habitacionEditada, idHabitacion) => {
  try {
    const respuesta = await fetch(URLHabitaciones + "/" + idHabitacion, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
      body: JSON.stringify(habitacionEditada),
    });

    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const listarUsuarios = async () => {
  try {
    const respuesta = await fetch(URLUsuarios, {
      method: "GET",
      headers: {
        "X-Token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
    });

    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const borrarUsuarios = async (idUsuario) => {
  try {
    const respuesta = await fetch(URLUsuarios + "/" + idUsuario, {
      method: "DELETE",
      headers: {
        "X-Token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const nuevaHabitacion = async (habitacion) => {
  try {
    const respuesta = await fetch(URLHabitaciones, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(habitacion),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const editarUsuario = async (usuarioEditado, idUsuario) => {
  try {
    const respuesta = await fetch(URLUsuarios + "/" + idUsuario, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
      body: JSON.stringify(usuarioEditado),
    });

    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const borrarHabitacion = async (idHabitacion) => {
  try {
    const respuesta = await fetch(URLHabitaciones + "/" + idHabitacion, {
      method: "DELETE",
      headers: {
        "X-Token": JSON.parse(sessionStorage.getItem("userKey")).token,
      },
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
