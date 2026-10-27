const db = require("../config/database");
const buscarTodos = async () => {
    const [categoria] = await db.query(`SELECT *FROM categoria`);
    return categoria;
};
const buscarPorId = async (id) => {
    const [categoria] = await db.query(` SELECT *FROM categoria WHERE Id_Categoria = ?`, [id]);
    return categoria[0];
};

const criar = async (Categoria) => {
    const [resultado] = await db.query(`
        INSERT INTO categoria (Categoria)
        VALUES ( ?)
    `, [Categoria]);

    return {
      Categoria
    };
};
const atualizar = async (Categoria) => {
    const [resultado] = await db.query(` UPDATE categoria SET Categoria = ? WHERE Id_Categoria = ?`, [Categoria]);

    return resultado.affectedRows;
};


const excluir = async (id) => {
    const [resultado] = await db.query(`
        DELETE FROM produto WHERE Id_Categoria = ? `, [id]);

    return resultado.affectedRows;
};

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    atualizar,
    excluir
};