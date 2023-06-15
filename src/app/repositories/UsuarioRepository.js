import { consulta } from '../../app/database/conexao.js';


class UsuarioRepository {
    // CRUD
    create(usuario) {
        const sql = 'INSERT INTO usuarios SET ?'
        return consulta(sql, usuario, 'Não foi possível cadastrar o usuário.')
    }

    findAll() {
        const sql = 'SELECT * FROM usuarios'
        return consulta(sql,'Não foi possível localizar os usuários.')
    }

    findById(id) {
        const sql = 'SELECT * FROM usuarios WHERE id=?'
        return consulta(sql, id, 'Não foi possível localizar o usuário.')
    }

    update(dados, id) {
        const sql = 'UPDATE usuarios SET ? WHERE id =?'
        return consulta(sql, [dados, id], 'Não foi possível editar.')
    }

    delete(id) {
        const sql = 'DELETE FROM usuarios WHERE id=?'
        return consulta(sql, id, 'Não foi possível deletar o usuário.')
    }

}

export default new UsuarioRepository();