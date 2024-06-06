import {Router} from 'express'
import { getRaces, setRaces } from '../controllers/races.controller.js'

const router = Router()

router.get("/races", getRaces)
router.post("/races", setRaces)

export default router