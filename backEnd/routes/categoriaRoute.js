const express = require("express");
const router = express.Router();

const categoriaController = require("../constrollers/categoriaController");

router.get("/categoria", categoriaController.buscarTodos);
router.get("/categoria/:id", categoriaController.buscarPorId);
router.post("/categoria", categoriaController.criar);
router.put("/categoria/:id", categoriaController.atualizar);
router.delete("/categoria/:id", categoriaController.excluir);

module.exports = router;

