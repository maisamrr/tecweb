import express from 'express'
import routes from './routes.js'

const app = express();

// Rota para arquivos estáticos
app.use(express.static('public'))

// Indicar para o express ler body com json
app.use(express.json())

// Usar o Router
app.use(routes)

export default app;