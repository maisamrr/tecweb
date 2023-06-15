import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'db_vemjunto',
});

conexao.connect();

/**
 * Executa uma query sql com ou sem valores
 * @param {string} sql instrução sql que será executada
 * @param {string = id | [usuario, id]} valores que serão passados para o sql
 * @param {string} mensagemReject mensagem que será exibida em caso de erro
 * @returns objeto da Promise
 */
export const consulta = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, resultado) => {
            if (erro) return reject(mensagemReject)
            // Parse dos resultados
            const linhas = JSON.parse(JSON.stringify(resultado))
            return resolve(linhas)
        })
    })
}

export default conexao;