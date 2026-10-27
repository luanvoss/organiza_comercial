const db = require("../config/db");

const buscarTodos = async () => {
    const [resultado] = await db.query("SELECT * FROM Categoria");
    return resultado;
};

const buscarPorId = async (id) => {
    const [resultado] = await db.query(
        "SELECT * FROM Categoria WHERE Id_Categoria = ?",
        [id]
    );

    return resultado[0];
};

const criar = async (categoria) => {
    const [resultado] = await db.query(
        "INSERT INTO Categoria (Nome) VALUES (?)",
        [categoria.Nome]
    );

    return resultado;
};

const atualizar = async (id, categoria) => {
    const [resultado] = await db.query(
        "UPDATE Categoria SET Nome = ? WHERE Id_Categoria = ?",
        [categoria.Nome, id]
    );

    return resultado;
};

const excluir = async (id) => {
    const [resultado] = await db.query(
        "DELETE FROM Categoria WHERE Id_Categoria = ?",
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
