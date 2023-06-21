/*Criar Tabela de Salas*/
CREATE TABLE room (
id INT IDENTITY(1,1) PRIMARY KEY,
name VARCHAR(60) NOT NULL UNIQUE,
occupied BIT NOT NULL DEFAULT 0,
created_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME,
);