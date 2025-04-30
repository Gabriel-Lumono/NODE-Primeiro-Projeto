import express from 'express';
import usuariosController from '../controllers/usariosController.js';

const router = express.Router();

router.post('/users', usuariosController.criar) //http://localhost/api/users
router.get('/users', usuariosController.listarUsuarios)

export default router;