import {Router} from 'express'
import { setUser } from "../controllers/users.controller.js";

const router = Router()

// router.get('/usuarios', getUsers)
router.post('/usuarios', setUser)
// router.get('/usuarios/:id', getUserById)
// router.put('/usuarios/:id', updateUser)
// router.delete('/usuarios/:id', deleteUser)


export default router
