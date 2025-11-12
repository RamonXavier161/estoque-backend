// /src/infrastructure/api/routes/user.routes.js

import { Router } from 'express';
// Caminho para o Controller de Usuário (subindo 3 níveis, indo para controllers)
import { UserController } from '../controllers/UserController.js';

const router = Router();

router.post('/cadastrar', UserController.register); 
router.post('/login', UserController.login); 

export default router;