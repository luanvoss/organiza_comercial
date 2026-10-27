const categoriaModels = require("../models/categoriaModels");

const buscarTodos = async (req, res) => {
    try {
        const categoria = await categoriaModels.buscarTodos();
        return res.json(categoria);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            erro: "Erro ao buscar categoria."
        });
    };
};
const buscarPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await categoriaModels.buscarPorId(id);

        if (!categoria) {
            return res.status(404).json({
                erro: "categoria não encontrado."
            });
        }

        return res.json(categoria);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            erro: "Erro ao buscar categoria."
        });
    };
};
const criar = async (req, res) => {
    try {
        const {Categoria } = req.body;
        if (Categoria) {
            return res.status(400).json({
                erro: " categoria é obrigatória."
            });
        }
        const categoria = await categoriaModels.criar(
          Categoria
        );
        return res.status(201).json(categoria);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            erro: "Erro ao criar categoria."
        });
    };
};
const atualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { Categoria } = req.body;

        if (Categoria) {
            return res.status(400).json({
                erro: "categoria é obrigatória."
            });
        }
        const linhasAfetadas = await categoriaModels.atualizar(
            Categoria
        );
        if (linhasAfetadas === 0) {
            return res.status(404).json({
                erro: "categoria não encontrado ou nenhum dado foi alterado."
            });
        };
        return res.json({
            mensagem: "categoria atualizada com sucesso."
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            erro: "Erro ao atualizar categoria."
        });
    };
};

const excluir = async (req, res) => {
    try {
        const { id } = req.params;
        const linhasAfetadas = await categoriaModels.excluir(id);
        if (linhasAfetadas === 0) {
            return res.status(404).json({
                erro: "categoria não encontrada."
            });
        };
        return res.json({
            mensagem: "categoria excluída com sucesso."
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            erro: "Erro ao excluir categoria."
        });
    };
};

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    atualizar,
    excluir
};