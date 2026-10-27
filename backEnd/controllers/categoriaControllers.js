const categoriaModel = require("../models/categoriaModel");

const buscarTodos = async (req, res) => {
    try {
        const categorias = await categoriaModel.buscarTodos();
        res.json(categorias);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar categorias" });
    }
};

const buscarPorId = async (req, res) => {
    try {
        const categoria = await categoriaModel.buscarPorId(req.params.id);

        if (!categoria) {
            return res.status(404).json({ erro: "Categoria não encontrada" });
        }

        res.json(categoria);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar categoria" });
    }
};

const criar = async (req, res) => {
    try {
        const resultado = await categoriaModel.criar(req.body);
        res.status(201).json(resultado);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao cadastrar categoria" });
    }
};

const atualizar = async (req, res) => {
    try {
        const resultado = await categoriaModel.atualizar(req.params.id, req.body);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ erro: "Categoria não encontrada" });
        }

        res.json({ mensagem: "Categoria atualizada com sucesso" });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao atualizar categoria" });
    }
};

const excluir = async (req, res) => {
    try {
        const resultado = await categoriaModel.excluir(req.params.id);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ erro: "Categoria não encontrada" });
        }

        res.json({ mensagem: "Categoria excluída com sucesso" });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao excluir categoria" });
    }
};

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    atualizar,
    excluir
};
