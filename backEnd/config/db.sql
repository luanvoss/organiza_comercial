CREATE TABLE produto 
( 
 Id_produto INT PRIMARY KEY AUTO_INCREMENT,  
 Quantidade  INT NOT NULL,  
 Preco FLOAT NOT NULL,  
 Nome VARCHAR NOT NULL DEFAULT '100',  
 Descricao VARCHAR NOT NULL DEFAULT '100',  
); 

CREATE TABLE categoria 
( 
 Id_categoria INT PRIMARY KEY AUTO_INCREMENT,  
 Categoria VARCHAR NOT NULL DEFAULT '100',  
); 

CREATE TABLE classes 
( 
 Id_categoria INT PRIMARY KEY,  
 Id_produto INT,  
 FOREIGN KEY(Id_categoria) REFERENCES categoria (Id_categoria),
  FOREIGN KEY(Id_produto) REFERENCES produto (Id_produto)
); 

insert into classes(Id_Produto, Id_Categoria)
values
(1, 1),
(2, 1),
(3, 2);

insert into categoria(categoria)
values
('Periféricos'),
('Monitores'),
('Hardware');

INSERT INTO produto ( Quantidade, Preco, Nome,Descricao)
VALUES
(2, 149.99, 'Teclado','RGB'),
(1, 250.00, 'Mouse','Branco'),
(3, 999.00, 'Monitor','75hz');