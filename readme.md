<!-- CREATE USER 'luan'@'localhost' IDENTIFIED BY 'info2k21';
ALTER USER 'luan'@'localhost' IDENTIFIED WITH mysql_native_password BY 'info2k21';
GRANT ALL PRIVILEGES ON * . * TO 'luan'@'localhost';
flush privileges;


create database node;

CREATE TABLE `node`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(150) NULL,
  `pageqty` INT NULL,
  `ramo` VARCHAR(150) NULL,
  `matriz` VARCHAR(150) NULL,
  `cnpj` VARCHAR(150) NULL,
  `filiais` VARCHAR(150) NULL,
  `ano` INT NULL,
  PRIMARY KEY (`id`));
  
INSERT INTO books (id,title,pageqty,ramo,matriz,cnpj,filiais,ano)
VALUES ('5', 'John Deere', '21', 'agro', 'canoascity', '7831231123213','3','1987');
  
ALTER TABLE books ADD COLUMN (
  
);

UPDATE books SET title,pageqty,ramo,matriz,cnpj,filiais,ano WHERE id = 1
  
DROP TABLE books; 
 
use node;
  
SELECT * FROM books -->

<h1 align="center">CADASTRO DE EMPRESAS USANDO NODEJS E MYSQL MANUALMENTE</h1>



