import express from 'express';
import usuariosController from '../controllers/usariosController.js';

const router = express.Router();

router.post('/user', usuariosController.criar) //http://localhost/api/users

export default router;