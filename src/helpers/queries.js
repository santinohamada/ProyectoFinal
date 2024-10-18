const URLusuarios= import.meta.env.VITE_URLUSUARIOS

export const registrarUsuariosAPI = async (usuarios)=>{
    try {
        const respuesta = await fetch(URLusuarios,{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(usuarios)
        })
        return respuesta
    } catch (error) {
        console.error(error)
    }
}