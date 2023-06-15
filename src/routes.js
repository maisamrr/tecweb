import { Router } from 'express'
import UsuarioController from './app/controllers/UsuarioController.js'

const router = Router()

// Rotas
router.post('/usuarios', UsuarioController.store)
router.get('/usuarios', UsuarioController.index)
router.get('/usuarios/:id', UsuarioController.show)
router.put('/usuarios/:id', UsuarioController.update)
router.delete('/usuarios/:id', UsuarioController.delete)

export default router