import listUserService from "../services/listUser.service.js"

const listUserController = (request,response)=>{
    const user = listUserService()

    return response.json(user)
}

export default listUserController