import { Router } from "express";
import bancosolarController from "../controllers/bancosolar.controller.js";


const router = Router();

router.get('/', bancosolarController.getClienteController)
router.post('/', bancosolarController.createClienteController)
router.put('/:id', bancosolarController.updateClienteController)

export default router;