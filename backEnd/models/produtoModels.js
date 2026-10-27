const db = require("../config/database");

const buscarTodos = async () => {
    const [produtos] = await db.query(
        "SELECT * FROM produto"
    
    );

    return produtos;
}

const buscarPorId = async (id) => {
    const [produtos] = await db.query(
        "SELECT * FROM produto WHERE Id_Produto = ?",
        [id]
    );

    return produtos[0];
}

const criar = async ( Nome, Descricao, Preco, Quantidade_Estoque, Quantidade_Minima) => {
    const produto = await db.query(
        "INSERT INTO produto ( Nome, Descricao, Preco, Quantidade_Estoque, Quantidade_Minima) VALUES(?,?,?,?,?);",
        [ Nome, Descricao, Preco, Quantidade_Estoque, Quantidade_Minima]
    );

    return {
        id: produto.insertId,
        Nome, 
        Descricao, 
        Preco, 
        Quantidade_Estoque, 
        Quantidade_Minima, 
    };
}

const atualizar = async (Id_Produto, Nome, Descricao, Preco, Quantidade_Estoque, Quantidade_Minima) => {
   await db.query(
        "UPDATE produto SET Nome=?, Descricao =?, Preco=?, Quantidade_Estoque=?,Quantidade_Minima=? WHERE Id_Produto=?",
        [ Nome, Descricao, Preco, Quantidade_Estoque, Quantidade_Minima,Id_Produto]
    );

    return{
        Id_Produto, 
        Nome, 
        Descricao, 
        Preco, 
        Quantidade_Estoque, 
        Quantidade_Minima
    };
};

const excluir = async (id) => {
    const [resultado] = await db.query(
        "DELETE FROM produto WHERE Id_Produto = ?",
        [id]
    );

    return resultado;
};

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    atualizar,
    excluir
};
