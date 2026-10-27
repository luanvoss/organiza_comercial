const db = require("../config/database");

const buscarTodos = async () => {
    const [resultado] = await db.query(`
        SELECT *,
        IF(Quantidade = 0, 'Sem estoque',
            IF(Quantidade <= Quantidade_Minima, 'Estoque baixo',
                'Estoque normal'
            )
        ) AS Situacao_Estoque
        FROM Produto
    `);

    return resultado;
};

const buscarPorId = async (id) => {
    const [resultado] = await db.query(`
        SELECT *,
        IF(Quantidade = 0, 'Sem estoque',
            IF(Quantidade <= Quantidade_Minima, 'Estoque baixo',
                'Estoque normal'
            )
        ) AS Situacao_Estoque
        FROM Produto
        WHERE Id_Produto = ?
    `, [id]);

    return resultado[0];
};

const criar = async (produto) => {
    const { Nome, Descricao, Preco, Quantidade, Quantidade_Minima, Id_Categoria } = produto;

    const [resultado] = await db.query(`
        INSERT INTO Produto
        (Nome, Descricao, Preco, Quantidade, Quantidade_Minima, Id_Categoria)
        VALUES (?, ?, ?, ?, ?, ?)
    `, [Nome, Descricao, Preco, Quantidade, Quantidade_Minima, Id_Categoria]);

    return resultado;
};

const atualizar = async (id, produto) => {
    const { Nome, Descricao, Preco, Quantidade, Quantidade_Minima, Id_Categoria } = produto;

    const [resultado] = await db.query(`
        UPDATE Produto SET Nome = ?, Descricao = ?, Preco = ?,
        Quantidade = ?, Quantidade_Minima = ?, Id_Categoria = ?
        WHERE Id_Produto = ?
    `, [Nome, Descricao, Preco, Quantidade, Quantidade_Minima, Id_Categoria, id]);

    return resultado;
};

const excluir = async (id) => {
    const [resultado] = await db.query(
        "DELETE FROM Produto WHERE Id_Produto = ?",
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
