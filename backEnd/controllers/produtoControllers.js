const produtoModel = require("../models/produtoModels");

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
        const { Nome, Descricao, Preco, Quantidade_Estoque, Quantidade_Minima } = req.body;
        const novoProduto = await produtoModel.criar(Nome, Descricao, Preco, Quantidade_Estoque, Quantidade_Minima);
        res.status(201).json(novoProduto)
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao cadastrar produto" });
    }
};

const atualizar = async (req, res) => {
    try {
        const { id } = req.params.id;
        const { Nome, Descricao, Preco, Quantidade_Estoque, Quantidade_Minima } = req.body;
        if (!Nome || !Descricao || !Preco || !Quantidade_Estoque || !Quantidade_Minima) {
            return res.status(400).json({
                erro: "Nome, descrição, preço, quantidade de estoque, quantidade minima são obrigatórios."
            });
        }
        const produtoAtualizado = await produtoModel.atualizar(
            id,
            Nome, 
            Descricao, 
            Preco, 
            Quantidade_Estoque, 
            Quantidade_Minima
        );
        res.json(produtoAtualizado);
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            erro: "Erro ao atualizar produto."
        });
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
