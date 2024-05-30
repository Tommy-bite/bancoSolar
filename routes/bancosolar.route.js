import { Router } from "express";
import bancosolarController from "../controllers/bancosolar.controller.js";


const router = Router();

router.get('/', bancosolarController.getClienteController)

export default router;