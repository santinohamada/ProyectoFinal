import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { iniciarSesion, registrarUsuario } from "../../helpers/queries";
const useUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const cerrarSesion = () => {
    sessionStorage.removeItem("userKey");
    setUser(null);
    navigate("/");
  };

  const registrarUsuarioAPI = async (usuario) => {
    try {
      const respuesta = await registrarUsuario(usuario);

      if (respuesta.status === 201) {
        Swal.fire({
          title: "Registro",
          text: `El usuario ${usuario.email}, fue registrado con exito.`,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: `No se pudo registrar el usuario ${usuario.email}, intente esta operación mas tarde `,
          icon: "error",
        });
      }
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


  useEffect(() => {
    const savedUser = sessionStorage.getItem("userKey");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  
  const iniciarSesionApi = async (usuario) => {
    const datosAEnviar = comprobarEntrada(usuario);
    try {
      const respuesta = await iniciarSesion(datosAEnviar);
      if (respuesta.status === 200) {
        let timerInterval;
        Swal.fire({
          title: "Sesion iniciada!",
          html: "Seras redirigido al inicio en <b></b> milisegundos.",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then(async (result) => {
          /* Read more about handling dismissals below */
          const datos = await respuesta.json();

          if (datos.dni) {
            setUser({ dni: datos.usuario.dni }); //completar con token
            sessionStorage.setItem(
              "userKey",
              JSON.stringify({ dni: datos.usuario.dni }) //completar con token
            );
          } else {
            setUser({ email: datos.usuario.email }); //completar con token
            sessionStorage.setItem(
              "userKey",
              JSON.stringify({ email: datos.usuario.email }) //completar con token
            );
          }
          navigate("/");
          if (result.dismiss === Swal.DismissReason.timer) {
          }
        });
      } else {
        Swal.fire({
          title: "ERROR",
          text: `email y/o contraseña incorrectos `,
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return { iniciarSesionApi, cerrarSesion, user, registrarUsuarioAPI };
};

export default useUser;
