const db = require("../config/database");
const buscarTodos = async () => {
    const [produtos] = await db.query(`SELECT *FROM produto`);

    return produtos;
};


const buscarPorId = async (id) => {
    const [produtos] = await db.query(` SELECT *FROM produto WHERE Id_Produto = ?`, [id]);
    return produtos[0];
};

const criar = async (Quantidade, Preco, Nome, Descricao,Id_Categoria) => {
    const [resultado] = await db.query(`
        INSERT INTO produto (Quantidade, Preco, Nome, Descricao,Id_Categoria)
        VALUES (?, ?, ?, ?, ?)
    `, [Quantidade, Preco, Nome, Descricao, Id_Categoria]);

    return {
        Id_Produto: resultado.insertId,
        Quantidade, 
        Preco, 
        Nome, 
        Descricao,
        Id_Categoria
    };
};


const atualizar = async (id, Quantidade, Preco, Nome, Descricao,Id_Categoria) => {
    const [resultado] = await db.query(`
        UPDATE produto
        SET Quantidade = ?, Preco = ?, Nome = ?, Descricao = ?, Id_Categoria = ?
        WHERE Id_Produto = ?
    `, [Quantidade, Preco, Nome, Descricao, id,Id_Categoria]);

    return resultado.affectedRows;
};


const excluir = async (id) => {
    const [resultado] = await db.query(`
        DELETE FROM produto WHERE Id_Produto = ? `, [id]);

    return resultado.affectedRows;
};

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    atualizar,
    excluir
};