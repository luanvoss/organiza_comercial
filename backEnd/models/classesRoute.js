const db = require("../config/database");

const criar = async (Id_Produto, Id_Categoria) => {
    const [resultado] = await db.query(
        "INSERT INTO classes (Id_Produto, Id_Categoria) VALUES (?, ?)",
        [Id_Produto, Id_Categoria]
    );

    return resultado;
};

module.exports = { criar };
