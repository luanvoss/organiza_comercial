const db = require("../config/db");

const criar = async (Id_Produto, Id_Categoria) => {
    const [resultado] = await db.query(
        "INSERT INTO Classes (Id_Produto, Id_Categoria) VALUES (?, ?)",
        [Id_Produto, Id_Categoria]
    );

    return resultado;
};

module.exports = { criar };
