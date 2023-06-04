/*Criar Trigger para atualização das colunas updated_at das tabelas*/
/*Função para realizar esta atualização dinamicamente sem a necessidade de reescrita no código*/
CREATE FUNCTION update_updated_at (@NAME_TABLE VARCHAR(30), @ID INT) RETURNS INT AS 
BEGIN
DECLARE @COMMAND nvarchar(150) = N'UPDATE QUOTENAME(@NAME_TABLE) SET updated_at = GETDATE() WHERE id = @ID'
EXEC sp_executesql @COMMAND, @ID
RETURN 1
END;

/*Trigger base para esta atualização*/
CREATE TRIGGER tr_update_default_updated_at ON "default" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('default', u.id) FROM inserted u;
END;
/*===============================================================================================*/

/*Criar tabela de usuários*/
CREATE TABLE "user"(
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(80) NOT NULL UNIQUE,
    cpf CHAR(11) NOT NULL UNIQUE,
    password VARCHAR(300),
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME,
);

CREATE TRIGGER tr_update_user_updated_at ON "user" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('user', u.id) FROM inserted u;
END;
/*===============================================================================================*/
/*Criar tabela de pacientes*/
CREATE TABLE pacient(
id INT IDENTITY(1,1) PRIMARY KEY,
user_id INT NOT NULL,
phone VARCHAR(15) NOT NULL UNIQUE,
phone_alternative VARCHAR(15) NOT NULL,
sus_code CHAR(15) NOT NULL UNIQUE,
unimed_code CHAR(15) UNIQUE,
created_at DATETIME DEFAULT GETDATE(),
updated_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME,
CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES "user"(id)
);

CREATE TRIGGER tr_update_pacient_updated_at ON "pacient" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('pacient', u.id) FROM inserted u;
END;
/*============================================================================================*/
/*Criar Tabela de Setores*/
CREATE TABLE sector(
id INT IDENTITY(1,1) PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
created_at DATETIME DEFAULT GETDATE(),
updated_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME,
);

CREATE TRIGGER tr_update_sector_updated_at ON "sector" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('sector', u.id) FROM inserted u;
END;
/*============================================================================================*/
/*Criar Tabela de Funcionários*/
CREATE TABLE employee(
id INT IDENTITY(1,1) PRIMARY KEY,
user_id INT NOT NULL,
sector_id INT NOT NULL,
access_code CHAR(12) NOT NULL,
created_at DATETIME DEFAULT GETDATE(),
updated_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME,
CONSTRAINT fk_user_employee FOREIGN KEY (user_id) REFERENCES "user"(id),
CONSTRAINT fk_sector_employee FOREIGN KEY (sector_id) REFERENCES "sector"(id)
);

CREATE TRIGGER tr_update_employee_updated_at ON "employee" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('employee', u.id) FROM inserted u;
END;
/*============================================================================================*/
/*Criar tabela de atendimentos*/
CREATE TABLE attendances(
id INT IDENTITY(1,1) PRIMARY KEY,
pacient_id INT NOT NULL,
doctor_id INT NOT NULL,
attendant_id INT NOT NULL,
description VARCHAR(500) NOT NULL,
created_at DATETIME DEFAULT GETDATE(),
updated_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME,
CONSTRAINT fk_pacient_attendances FOREIGN KEY(pacient_id) REFERENCES pacient(id),
CONSTRAINT fk_doctor_attendances FOREIGN KEY (doctor_id) REFERENCES employee(id),
CONSTRAINT fk_attendant_attendances FOREIGN KEY (attendant_id) REFERENCES employee(id)
);

CREATE TRIGGER tr_update_attendances_updated_at ON "attendances" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('attendances', u.id) FROM inserted u;
END;
/*===============================================================================================*/
/*Criar Tabela de Salas*/
CREATE TABLE room (
id INT IDENTITY(1,1) PRIMARY KEY,
name VARCHAR(60) NOT NULL UNIQUE,
created_at DATETIME DEFAULT GETDATE(),
updated_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME,
);

CREATE TRIGGER tr_update_room_updated_at ON "room" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('room', u.id) FROM inserted u;
END;
/*==============================================================================================*/
/*Criar tabela de permissões de cada setor para as salas*/
CREATE TABLE room_permission_sector(
ID INT IDENTITY(1,1) PRIMARY KEY,
sector_id INT NOT NULL,
room_id INT NOT NULL,
created_at DATETIME DEFAULT GETDATE(),
updated_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME,
CONSTRAINT fk_sector_room_permission_sector FOREIGN KEY (sector_id) REFERENCES sector(id),
CONSTRAINT fk_room_room_permission_sector FOREIGN KEY (room_id) REFERENCES room(id),
);

CREATE TRIGGER tr_update_room_permission_sector_updated_at ON "room_permission_sector" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('room_permission_sector', u.id) FROM inserted u;
END;
/*==============================================================================================*/




