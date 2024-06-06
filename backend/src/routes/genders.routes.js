import { Router } from "express";
import { getGenders, setGenders } from "../controllers/genders.controller.js";

const router = Router()

router.get("/genders", getGenders)
router.post("/genders", setGenders)

export default router