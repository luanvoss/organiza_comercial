const express = require("express");
const app = express();

const produtosRoute = require("./routes/produtoRoute");
const categoriasRoute = require("./routes/categoriaRoute");

app.use(express.json());

app.use(produtosRoute);
app.use(categoriasRoute);

module.exports = app;
