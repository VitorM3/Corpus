/*Criar tabela de usuários*/
CREATE TABLE "user"(
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(80) NOT NULL UNIQUE,
    cpf CHAR(11) NOT NULL UNIQUE,
    password VARCHAR(300),
    created_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME,
);
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
deleted_at DATETIME,
CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES "user"(id)
);
/*============================================================================================*/
/*Criar Tabela de Setores*/
CREATE TABLE sector(
id INT IDENTITY(1,1) PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
created_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME,
);
/*============================================================================================*/
/*Criar Tabela de Funcionários*/
CREATE TABLE employee(
id INT IDENTITY(1,1) PRIMARY KEY,
user_id INT NOT NULL,
sector_id INT NOT NULL,
access_code CHAR(12) NOT NULL,
created_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME,
CONSTRAINT fk_user_employee FOREIGN KEY (user_id) REFERENCES "user"(id),
CONSTRAINT fk_sector_employee FOREIGN KEY (sector_id) REFERENCES "sector"(id)
);
/*============================================================================================*/
/*Criar tabela de atendimentos*/
CREATE TABLE attendances(
id INT IDENTITY(1,1) PRIMARY KEY,
pacient_id INT NOT NULL,
doctor_id INT NOT NULL,
attendant_id INT NOT NULL,
meetings_number INT NOT NULL DEFAULT 1,
description VARCHAR(500) NOT NULL,
created_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME,
CONSTRAINT fk_pacient_attendances FOREIGN KEY(pacient_id) REFERENCES pacient(id),
CONSTRAINT fk_doctor_attendances FOREIGN KEY (doctor_id) REFERENCES employee(id),
CONSTRAINT fk_attendant_attendances FOREIGN KEY (attendant_id) REFERENCES employee(id)
);
/*===============================================================================================*/
/*Criar Tabela de Salas*/
CREATE TABLE room (
id INT IDENTITY(1,1) PRIMARY KEY,
name VARCHAR(60) NOT NULL UNIQUE,
occupied BIT NOT NULL DEFAULT 0,
created_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME,
);
/*==============================================================================================*/
/*Criar tabela de permissões de cada setor para as salas*/
CREATE TABLE room_permission_sector(
ID INT IDENTITY(1,1) PRIMARY KEY,
sector_id INT NOT NULL,
room_id INT NOT NULL,
created_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME,
CONSTRAINT fk_sector_room_permission_sector FOREIGN KEY (sector_id) REFERENCES sector(id),
CONSTRAINT fk_room_room_permission_sector FOREIGN KEY (room_id) REFERENCES room(id),
);
/*==============================================================================================*/
/*Criar Estoque*/
CREATE TABLE inventory(
id INT IDENTITY(1,1) PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
quantity TINYINT NOT NULL,
created_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME
);
/*==============================================================================================*/
/*Criar Encontro de um atendimento*/
CREATE TABLE meeting(
id INT IDENTITY(1,1) PRIMARY KEY,
room_id INT NOT NULL,
attendances_id INT NOT NULL,
appointment DATETIME NOT NULL,
started_at DATETIME,
end_at DATETIME,
created_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME,
CONSTRAINT fk_room_meeting FOREIGN KEY(room_id) REFERENCES room(id),
CONSTRAINT fk_attendances_meeting FOREIGN KEY (attendances_id) REFERENCES attendances(id)
);
/*==============================================================================================*/
/*Criar Itens utilizados no encontro */
CREATE TABLE meeting_tool(
    id INT IDENTITY(1,1) PRIMARY KEY,
    meeting_id INT NOT NULL,
    tool_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    created_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME,
    CONSTRAINT fk_meeting_meeting_tool FOREIGN KEY (meeting_id) REFERENCES meeting(id),
    CONSTRAINT fk_tool_meeting_tool FOREIGN KEY (tool_id) REFERENCES inventory(id)
);
/*=============================================================================================*/
/*Criar Exercicios*/
CREATE TABLE exercise(
id INT IDENTITY(1,1) PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
description VARCHAR(500) NOT NULL,
knowledge_font VARCHAR(150) NOT NULL,
created_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME
);
/*===========================================================================================*/
/*Criar Itens utilizados em cada exercicio*/
CREATE TABLE exercise_tool(
    id INT IDENTITY(1,1) PRIMARY KEY,
    exercise_id INT NOT NULL,
    tool_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    created_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME,
    CONSTRAINT fk_exercise_exercise_tool FOREIGN KEY (exercise_id) REFERENCES exercise(id),
    CONSTRAINT fk_tool_exercise_tool FOREIGN KEY (tool_id) REFERENCES inventory(id)
);
/*===========================================================================================*/
/*Criar tabela de exercícios feitos em cada encontro*/
CREATE TABLE exercise_meeting(
    id INT IDENTITY(1,1) PRIMARY KEY,
    exercise_id INT NOT NULL,
    meeting_id INT NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME,
    CONSTRAINT fk_exercise_exercise_meeting FOREIGN KEY (exercise_id) REFERENCES exercise(id),
    CONSTRAINT fk_meeting_exercise_meeting FOREIGN KEY (meeting_id) REFERENCES meeting(id),
);
/*=========================================================================================*/
/*Criar tabela de itens de uma sala*/
CREATE TABLE room_tool (
ID INT IDENTITY(1,1) PRIMARY KEY,
tool_id INT NOT NULL,
room_id INT NOT NULL,
quantity INT NOT NULL DEFAULT 1,
created_at DATETIME DEFAULT GETDATE(),
deleted_at DATETIME,
CONSTRAINT fk_tool_room_tool FOREIGN KEY (tool_id) REFERENCES inventory(id),
CONSTRAINT fk_room_room_tool FOREIGN KEY (room_id) REFERENCES room(id),
);
/*========================================================================================*/
/*Tabela para apresentar o relatório*/
CREATE TABLE attendance_report(
    id INT IDENTITY(1,1) PRIMARY KEY,
    pacient_name VARCHAR(50),
    doctor_name VARCHAR(50),
    description VARCHAR(500),
    qtd_meetings INT,
    qtd_meetings_without_presence INT,
    qtd_meetings_presence INT
);
/*============================================================================================*/
/*View para a busca de pacientes*/
CREATE VIEW vw_pacient AS
SELECT 
u.id as id,
u.name as name,
u.email as email,
u.cpf as cpf,
p.phone as phone,
p.phone_alternative as phone_alternative,
p.sus_code as sus_code,
p.unimed_code as unimed_code,
p.created_at as created_at
 FROM pacient p
INNER JOIN [user] u ON u.id = p.user_id
WHERE u.deleted_at IS NULL and p.deleted_at IS NULL
/*==============================================================================================*/
/*View para buscar os colaboradores*/
CREATE VIEW vw_doctor AS
SELECT
u.id as id,
u.name as name,
u.email as email,
u.cpf as cpf,
e.access_code as access_code
FROM [user] u
INNER JOIN employee e ON e.user_id = u.id
INNER JOIN sector s ON s.id = e.sector_id
WHERE s.name = 'DOCTOR'
/*==============================================================================================*/