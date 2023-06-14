import UsuarioRepository from '../repositories/UsuarioRepository.js';

class UsuarioController {

    // Listar tudo
    async index(req, res) {
        const linha = await UsuarioRepository.findAll()
        res.json(linha)
    }

    // Listar por id
    async show(req, res) {
        const id = req.params.id
        const linha = await UsuarioRepository.findById(id)
        res.json(linha)
    }

    // Criar dados
    async store(req, res) {
        const dados = req.body
        const linha = await UsuarioRepository.create(dados)
        res.json(linha)
    }

    async update(req, res) {
        const dados = req.body;
        const id = req.params.id;
        const linha = await UsuarioRepository.update(dados, id)
        res.json(linha)
    }

    async delete(req, res) {
        const id = req.params.id;
        const linha = await UsuarioRepository.delete(id)
        res.json(linha)
    }

}

export default new UsuarioController();