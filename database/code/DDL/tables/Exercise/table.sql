/*Criar Exercícios*/
CREATE TABLE exercise(
id INT IDENTITY(1,1) PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
description VARCHAR(500) NOT NULL,
knowledge_font VARCHAR(150) NOT NULL,
created_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME
);