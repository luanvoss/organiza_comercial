const express = require("express");
const router = express.Router();

const categoriaControllers = require("../controllers/categoriaControllers");

router.get("/categoria", categoriaControllers.buscarTodos);
router.get("/categoria/:id", categoriaControllers.buscarPorId);
router.post("/categoria", categoriaControllers.criar);
router.put("/categoria/:id", categoriaControllers.atualizar);
router.delete("/categoria/:id", categoriaControllers.excluir);

module.exports = router;