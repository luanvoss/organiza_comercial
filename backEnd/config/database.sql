CREATE DATABASE organiza_comercial;

USE organiza_comercial;

CREATE TABLE Categoria (
    Id_Categoria INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL
);

CREATE TABLE Produto (
    Id_Produto INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Descricao VARCHAR(255),
    Preco FLOAT NOT NULL,
    Quantidade_Estoque INT NOT NULL DEFAULT 0,
    Quantidade_Minima INT NOT NULL DEFAULT 0
);

CREATE TABLE Classes (
    Id_Produto INT PRIMARY KEY,
    Id_Categoria INT NOT NULL,
    FOREIGN KEY (Id_Produto) REFERENCES Produto(Id_Produto),
    FOREIGN KEY (Id_Categoria) REFERENCES Categoria(Id_Categoria)
);

INSERT INTO Categoria (Nome) VALUES
('Eletrônicos'),
('Móveis'),
('Informática');

INSERT INTO Produto (Nome, Descricao, Preco, Quantidade_Estoque, Quantidade_Minima) VALUES
('Teclado', 'Teclado USB', 89.90, 10, 2),
('Cadeira', 'Cadeira de escritório', 350.00, 5, 2),
('Mouse', 'Mouse sem fio', 59.90, 0, 3);

INSERT INTO Classes (Id_Produto, Id_Categoria) VALUES
(1, 3),
(2, 2),
(3, 1);

