const express = require("express");
const router = express.Router();

const produtosControllers = require("../controllers/produtosControllers");

router.get("/produtos", produtosControllers.buscarTodos);
router.get("/produtos/:id", produtosControllers.buscarPorId);
router.post("/produtos", produtosControllers.criar);
router.put("/produtos/:id", produtosControllers.atualizar);
router.delete("/produtos/:id", produtosControllers.excluir);

module.exports = router;