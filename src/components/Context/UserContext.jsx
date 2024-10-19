import { createContext } from "react";
import useUser from "../CustomsHooks/useUser.jsx";

const UserContext = createContext()

const UserProvider = ({children})=>{
    const {iniciarSesionApi,cerrarSesion,user,registrarUsuarioAPI} = useUser()
    const data = {iniciarSesionApi,cerrarSesion,user,registrarUsuarioAPI}
    return(
        <UserContext.Provider value={data}> {children} </UserContext.Provider>
    )
}
export {UserContext,UserProvider}