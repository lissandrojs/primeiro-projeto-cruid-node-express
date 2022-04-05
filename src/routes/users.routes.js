import { Router } from "express";

import createUserController from "../controllers/createUser.controller.js";
import deleteUserController from "../controllers/deleteUser.controller.js";
import listUserController from "../controllers/listUser.controller.js";
import updatareUserController from "../controllers/updateUser.controller.js";

const router = Router()

router.get("", listUserController)
router.post("",createUserController)
router.put("/:id", updatareUserController)
router.delete("/:id", deleteUserController)

export default router