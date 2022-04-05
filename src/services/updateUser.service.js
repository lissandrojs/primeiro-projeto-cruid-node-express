import users from "../database/index.js"

const updateUserService = (id,name,email)=>{
    const updateUser ={
        id,
        name,
        email
    }

    const userIndex = users.findIndex((item)=> item.id === id)

    if(userIndex === -1){
        return "Usuario nao encontrado"
    }

    users[userIndex] = {...users[userIndex], ...updateUser}

    return users[userIndex]
}

export default updateUserService