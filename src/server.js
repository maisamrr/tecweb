import app from './app.js'

// Porta em que o servidor irá escutar
const PORT = process.env.PORT || 3000

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`)
});
