import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  iniciarSesion,
  registrarUsuario,
  verificarAdministrador,
} from "../../helpers/queries";

const useUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("userKey")) || null
  );
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = sessionStorage.getItem("token");

  const cerrarSesion = () => {
    setUser(null);
    setIsAdmin(false);
    setLoading(true);
    sessionStorage.removeItem("userKey");
  };

  useEffect(() => {
    const verificarAdmin = async () => {
      if (user) {
        const admin = await verificarAdministrador(user);
        setIsAdmin(admin);
      }
      setLoading(false);
    };
    verificarAdmin();
  }, [user]);

  const registrarUsuarioAPI = async (usuario) => {
    try {
      const respuesta = await registrarUsuario(usuario);
      const mensaje =
        respuesta.status === 201
          ? {
              title: "Registro",
              text: `Usuario ${usuario.email} registrado con éxito.`,
              icon: "success",
            }
          : {
              title: "Error",
              text: `No se pudo registrar el usuario ${usuario.email}. Intente más tarde.`,
              icon: "error",
            };

      Swal.fire(mensaje);
    } catch (error) {
      console.error(error);
    }
  };

  const comprobarEntrada = (usuario) => {
    if (/^[0-9]{8}$/.test(usuario.entrada)) {
      return { dni: usuario.entrada, password: usuario.password };
    }
    return { email: usuario.entrada, password: usuario.password };
  };

  const iniciarSesionApi = async (usuario) => {
    const datosAEnviar = comprobarEntrada(usuario);
    try {
      const respuesta = await iniciarSesion(datosAEnviar);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Sesión iniciada!",
          html: "Serás redirigido en <b></b> milisegundos.",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => Swal.showLoading(),
        }).then(async () => {
          const datos = await respuesta.json();
          const userInfo = datos.dni
            ? {
                dni: datos.usuario.dni,
                id: datos.usuario._id,
                token: datos.token,
              }
            : {
                email: datos.usuario.email,
                id: datos.usuario._id,
                token: datos.token,
              };

          setUser(userInfo);
          sessionStorage.setItem("userKey", JSON.stringify(userInfo));

          setIsAdmin(true);
          navigate(-1);
        });
      } else {
        Swal.fire({
          title: "ERROR",
          text: "Email y/o contraseña incorrectos",
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    iniciarSesionApi,
    cerrarSesion,
    user,
    isAdmin,
    loading,
    registrarUsuarioAPI,
  };
};

export default useUser;
