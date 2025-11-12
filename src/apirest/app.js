// /src/apirest/app.js

import cors from 'cors';
import express from 'express';

// Os caminhos são relativos dentro da pasta /api
import materialRoutes from './routes/material.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

// Middlewares
app.use(cors()); 
app.use(express.json()); 

// Conectando as Rotas
app.use('/', userRoutes); 
app.use('/', materialRoutes); 

export { app };

