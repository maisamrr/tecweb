import app from './src/app.js';

// Porta em que o servidor irá escutar
const PORT = 80;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
