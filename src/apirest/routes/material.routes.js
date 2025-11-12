// /src/infrastructure/api/routes/material.routes.js

import { Router } from 'express';
// Caminho para o Controller de Material (subindo 3 níveis, indo para controllers)
import { MaterialController } from '../controllers/MaterialController.js';

const router = Router();

router.post("/cadastrar-material", MaterialController.register); 

router.get("/materiais", MaterialController.list);

export default router;