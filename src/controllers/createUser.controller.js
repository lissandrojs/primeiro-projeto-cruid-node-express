import createUserService from "../services/createUser.service.js";

const createUserController = (request,response)=>{
    const {email,name} = request.body
    const user = createUserService(email,name)

    return response.json(user)
}

export default createUserController