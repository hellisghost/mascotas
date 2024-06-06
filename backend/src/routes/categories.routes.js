import { Router } from "express";
import { getCategories, setCategories } from "../controllers/categories.controller.js";

const router = Router()

router.get("/categories", getCategories)
router.post("/categories", setCategories)

export default router