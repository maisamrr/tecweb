import express from 'express';
import UsuarioController from './app/controllers/UsuarioController.js';

const app = express();

// Rota para arquivos estáticos
app.use(express.static('public'));

// Indicar para o express ler body com json
app.use(express.json());

// Rotas
app.post('/usuarios', UsuarioController.store);
app.get('/usuarios', UsuarioController.index);
app.get('/usuarios/:id', UsuarioController.show);
app.put('/usuarios/:id', UsuarioController.update);
app.delete('/usuarios/:id', UsuarioController.delete);

export default app;