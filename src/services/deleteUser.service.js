import users from "../database/index.js";

const deleteUserService = (id)=>{
    const userIndex = users.findIndex((item)=> item.id === id)

    if(userIndex === -1){
        return "Usuario nao encontrado"
    }

    users.splice(userIndex,1)

    return "Usuario excluido"
}
export default deleteUserService