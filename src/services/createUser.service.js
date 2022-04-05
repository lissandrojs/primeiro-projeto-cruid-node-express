import users from "../database/index.js"
import { v4 as uuidv4 } from "uuid";

const createUserService =(email,name)=>{
    const userAlredyExists = users.find((item)=> item.email === email)

    if(userAlredyExists){
        return " Este email ja existe"
    }

    const newUsers = {
        email,
        name,
        id : uuidv4()
    }

    users.push(newUsers)

    return newUsers
}

export default createUserService