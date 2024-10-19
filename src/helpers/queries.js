const URLUsuarios = import.meta.env.VITE_API_USUARIOS;
const URLIniciarSesion = import.meta.env.VITE_API_INICIARSESION;

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
