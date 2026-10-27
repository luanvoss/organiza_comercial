const express = require("express");
const app = express();

const produtosRoute = require("./routes/produtoRoutes");
const categoriasRoute = require("./routes/categoriaRoutes");

app.use(express.json());

app.use(produtosRoute);
app.use(categoriasRoute);

module.exports = app;
