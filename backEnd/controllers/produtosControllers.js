const produtoModel = require("../models/produtoModel");
const classesModel = require("../models/classesModel");

const buscarTodos = async (req, res) => {
    try {
        const produtos = await produtoModel.buscarTodos();
        res.json(produtos);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar produtos" });
    }
};

const buscarPorId = async (req, res) => {
    try {
        const produto = await produtoModel.buscarPorId(req.params.id);

        if (!produto) {
            return res.status(404).json({ erro: "Produto não encontrado" });
        }

        res.json(produto);
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar produto" });
    }
};

const criar = async (req, res) => {
    try {
        const produto = await produtoModel.criar(req.body);

        await classesModel.criar(
            produto.insertId,
            req.body.Id_Categoria
        );

        res.status(201).json({
            mensagem: "Produto cadastrado com sucesso"
        });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao cadastrar produto" });
    }
};

const atualizar = async (req, res) => {
    try {
        const resultado = await produtoModel.atualizar(req.params.id, req.body);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ erro: "Produto não encontrado" });
        }

        res.json({ mensagem: "Produto atualizado com sucesso" });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao atualizar produto" });
    }
};

const excluir = async (req, res) => {
    try {
        const resultado = await produtoModel.excluir(req.params.id);

        if (resultado.affectedRows === 0) {
            return res.status(404).json({ erro: "Produto não encontrado" });
        }

        res.json({ mensagem: "Produto excluído com sucesso" });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao excluir produto" });
    }
};

module.exports = {
    buscarTodos,
    buscarPorId,
    criar,
    atualizar,
    excluir
};
