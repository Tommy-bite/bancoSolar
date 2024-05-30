import { Router } from "express";
import transferenciaController from "../controllers/transferencia.controller.js";



const router = Router();

router.get('/', transferenciaController.getTransferenciasController)
router.post('/', transferenciaController.createTransferenciaController)


export default router;