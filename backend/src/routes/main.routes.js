import { Router } from "express";
import { MainController } from "../controller/main.controller.js";

const router = Router();

router.get("/", MainController.home )

export default router