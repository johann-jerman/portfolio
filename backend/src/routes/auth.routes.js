import { Router } from "express";
import { AuthController } from "../controller/auth.controller.js";

const router = Router();

router.post("/register", AuthController.register )

export default router