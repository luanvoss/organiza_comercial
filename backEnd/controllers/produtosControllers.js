const produtosModels = require("../models/produtosModels");

const buscarTodos = async (req, res) => {
    try {
        const produto = await produtosModels.buscarTodos();

        return res.json(produto);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            erro: "Erro ao buscar produtos."
        });
    }
};


const buscarPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const produto = await produtosModels.buscarPorId(id);

        if (!produto) {
            return res.status(404).json({
                erro: "produto não encontrado."
            });
        }

        return res.json(produto);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            erro: "Erro ao buscar produto."
        });
    }
};


const criar = async (req, res) => {
    try {
        const { Quantidade, Preco, Nome, Descricao, Id_Categoria } = req.body;

        if (!Quantidade || !Preco || !Nome || !Descricao || Id_Categoria) {
            return res.status(400).json({
                erro: "Quantidade, Preço, nome e descrição e Id da categoria são obrigatórios."
            });
        }

        const produto = await produtosModels.criar(
            Quantidade,
            Preco,
            Nome,
            Descricao,
            Id_Categoria
        );
        return res.status(201).json(produto);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            erro: "Erro ao criar produto."
        });
    };
};

const atualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { Quantidade, Preco, Nome, Descricao, Id_Categoria } = req.body;

        if (!Quantidade || !Preco || !Nome || !Descricao || Id_Categoria) {
            return res.status(400).json({
                erro: "Quantidade, Preço, nome e descrição e Id da categoria são obrigatórios."
            });
        }
        const linhasAfetadas = await produtosModels.atualizar(
            id,
            Quantidade,
            Preco,
            Nome,
            Descricao,
            Id_Categoria
        );
        if (linhasAfetadas === 0) {
            return res.status(404).json({
                erro: "prouto não encontrado ou nenhum dado foi alterado."
            });
        };
        return res.json({
            mensagem: "Produto atualizado com sucesso."
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            erro: "Erro ao atualizar Produto."
        });
    };
};


const excluir = async (req, res) => {
    try {
        const { id } = req.params;

        const linhasAfetadas = await produtosModels.excluir(id);

        if (linhasAfetadas === 0) {
            return res.status(404).json({
                erro: "Produto não encontrado."
            });
        };
        return res.json({
            mensagem: "Produto excluído com sucesso."
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            erro: "Erro ao excluir produto."
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