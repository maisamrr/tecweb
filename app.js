import express from 'express';
import conexao from './infra/conexao.js';

const app = express();

// Rota para arquivos estáticos
app.use(express.static('public'));

// Indicar para o express ler body com json
app.use(express.json());

function buscarUsuarioPorId(id) {
    return usuarios.filter(usuario => usuario.id == id);
};

function buscarIndexUsuario(id) {
    return usuarios.findIndex(usuario => usuario.id == id);
};

// Create
app.post('/usuarios', (req, res) => {
    //usuarios.push(req.body);
    //res.status(201).send('Usuário cadastrado com sucesso.');
    const dados = req.body;
    const sql = 'INSERT INTO usuarios SET ?';
    conexao.query(sql, dados, (erro, resultado) => {
        if (erro) {
            res.status(400).json({ 'erro': erro });
        } else {
            res.status(201).json(resultado);
        }
    })
});

// Read
app.get('/usuarios', (req, res) => {
    const sql = 'SELECT * FROM usuarios';
    conexao.query(sql, (erro, resultado) => {
        if (erro) {
            res.status(404).json({ 'erro': erro });
        } else {
            res.status(200).json(resultado);
        }
    })
});

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM usuarios WHERE id=?';
    conexao.query(sql, id, (erro, resultado) => {
        if (erro) {
            res.status(404).json({ 'erro': erro });
        } else {
            res.status(200).json(resultado);
        }
    })
});

// Update
app.put('/usuarios/:id', (req, res) => {
    const dados = req.body;
    const id = req.params.id;
    const sql = 'UPDATE usuarios SET ? WHERE id =?';
    conexao.query(sql, [dados, id], (erro, resultado) => {
        if (erro) {
            res.status(400).json({ 'erro': erro });
        } else {
            res.status(200).json(resultado);
        }
    })
});

// Delete
app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM usuarios WHERE id=?';
    conexao.query(sql, id, (erro, resultado) => {
        if (erro) {
            res.status(404).json({ 'erro': erro });
        } else {
            res.status(200).json(resultado);
        }
    })
});

export default app;