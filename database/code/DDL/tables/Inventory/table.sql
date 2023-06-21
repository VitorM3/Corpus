/*Criar Estoque*/
CREATE TABLE inventory(
id INT IDENTITY(1,1) PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
quantity TINYINT NOT NULL,
created_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME
);