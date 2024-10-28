import { createContext } from "react";
import useUser from "../CustomsHooks/useUser.jsx";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { iniciarSesionApi, cerrarSesion, user, registrarUsuarioAPI, isAdmin } =
    useUser();
  const data = {
    iniciarSesionApi,
    cerrarSesion,
    user,
    registrarUsuarioAPI,
    isAdmin,
  };
  return <UserContext.Provider value={data}> {children} </UserContext.Provider>;
};
export { UserContext, UserProvider };
