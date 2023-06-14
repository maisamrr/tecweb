import conexao from '../../app/database/conexao.js';

class UsuarioRepository {

    create(usuario) {
        const sql = 'INSERT INTO usuarios SET ?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, usuario, (erro, resultado) => {
                if (erro) return reject('Não foi possível cadastrar.')
                //Parse dos resultados
                const linhas = JSON.parse(JSON.stringify(resultado))
                return resolve(linhas)
            })
        })
    }

    findAll() {
        const sql = 'SELECT * FROM usuarios';
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if (erro) return reject('Não foi possível localizar.')
                //Parse dos resultados
                const linhas = JSON.parse(JSON.stringify(resultado))
                return resolve(linhas)
            })
        })
    }

    findById(id) {
        const sql = 'SELECT * FROM usuarios WHERE id=?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if (erro) return reject('Não foi possível localizar.')
                //Parse dos resultados
                const linhas = JSON.parse(JSON.stringify(resultado))
                return resolve(linhas)
            })
        })
    }

    update(dados, id) {
        const sql = 'UPDATE usuarios SET ? WHERE id =?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, [dados, id], (erro, resultado) => {
                if (erro) return reject('Não foi possível editar.')
                //Parse dos resultados
                const linhas = JSON.parse(JSON.stringify(resultado))
                return resolve(linhas)
            })
        })
    }

    delete(id) {
        const sql = 'DELETE FROM usuarios WHERE id=?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if (erro) return reject('Não foi possível deletar.')
                //Parse dos resultados
                const linhas = JSON.parse(JSON.stringify(resultado))
                return resolve(linhas)
            })
        })
    }

}

export default new UsuarioRepository();