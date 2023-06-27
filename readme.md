## Projeto Sistema de Atendimento de Fisioterapia

### Grupo C

### Integrantes:

- Vitor Loch - VitorM3 
- Danilo Formanski - Danilean 
- Keniel Nunes - KenielDev 
- Laura Silveira - Laurassilveirag
- Rafael Castro - RafaelDaSilvaCastro
- Vinicius Albino - Shinguek0
- Yuri Lopes - YuriLopesM
- Vitor Minatto - Minattoo

### Modelo Físico:

https://drawsql.app/teams/vitor-loch/diagrams/corpus <br>
![image-diagram](./database/doc/image/diagram.png)

### Dicionário de Dados:

/database/doc/dictionary/Corpus Dictionary.xlsx

### Scripts DDL Criação do Database:

Banco de dados utilizado SQL Server versão 2022 - Azure. <br>

/database/code/DDL/tables

```sql
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
```

### Scripts Popula tabelas:

Banco de dados utilizado SQL Server versão 2022 - Azure.`<br>`

```sql




```

### Objetos de BD (stored procedure, triggers e functions):

/database/code/DDL/tables

```sql
/*View para a tela de visualização*/
CREATE VIEW vw_attendance_find_all AS 
SELECT
a.id as id,
u.name as pacient_name,
du.name as doctor_name,
a.description as description,
COUNT (DISTINCT m.id) as qtd_meetings,
COUNT (
CASE 
	WHEN m.started_at IS NULL THEN 1
END
) as qtd_meetings_without_presence,
COUNT (
CASE 
	WHEN m.started_at IS NOT NULL THEN 1
END
) as qtd_meetings_presence
FROM attendances a
INNER JOIN pacient p on p.id = a.pacient_id
INNER JOIN [user] u ON u.id = p.user_id
INNER JOIN employee att ON att.id = a.attendant_id
INNER JOIN [user] attu ON attu.id = att.user_id
INNER JOIN employee d ON d.id = a.doctor_id
INNER JOIN [user] du ON du.id = d.user_id
INNER JOIN meeting m ON m.attendances_id = a.id 
GROUP BY a.id,u.name,du.name,a.description

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
WHERE s.name = 'DOCTOR';

/*Procedure para atualizar os dados se uma sala quando um encontro inicia*/
CREATE PROCEDURE proc_start_meeting_in_room @ID_MEETING INT, @ID_ROOM INT AS
BEGIN
    BEGIN TRAN
        BEGIN TRY
            /*Verificar se a sala pode ser usada*/
        	IF (SELECT occupied FROM room WHERE id = @ID_ROOM) = 1
        		BEGIN 
	        		RAISERROR('A Sala no momento está ocupada para marcar este encontro',16,1)
	       		END;
	       	/*====================================================================================*/
           /*Verificar se a sala pode ser usada*/
        	IF (SELECT COUNT(1) FROM room WHERE deleted_at IS NOT NULL AND id = @ID_ROOM) >= 1
        		BEGIN 
	        		RAISERROR('A Sala no momento não está disponível para marcar este encontro',16,1)
	       		END;
	       	/*====================================================================================*/
            /*Inserir itens que foram utilizados no encontro*/
            INSERT INTO meeting_tool (meeting_id,tool_id,quantity) 
            (SELECT @ID_MEETING as meeting_id, tool_id, quantity FROM room_tool WHERE room_id = @ID_ROOM);
			/*======================================================================================*/
           /*Definir que a sala está ocupada*/
           UPDATE room SET occupied = 1 WHERE id = @ID_ROOM
           /*========================================================================================*/
    COMMIT;
        END TRY
        BEGIN CATCH
    ROLLBACK;
            THROW;
        END CATCH;

END;

/*Procedure para adicionar os dados dos exercícios presentes em uma reunião*/
CREATE PROCEDURE proc_start_meeting_with_exercises @ID_MEETING INT AS
BEGIN
    BEGIN TRAN
        BEGIN TRY
            /*Verificar se a sala pode ser usada*/
        	IF (SELECT COUNT(1) FROM exercise_meeting WHERE deleted_at IS NOT NULL AND meeting_id = @ID_MEETING) >= 1
        		BEGIN 
	        		RAISERROR('Um dos Exercícios não está mais disponível para ser realizado no encontro',16,1)
	       		END;
	       	/*====================================================================================*/
            /*Verificar se um destes itens não está disponível para uso*/
            IF (SELECT COUNT(
            		        CASE
	            		        WHEN ((ISNULL(mt.quantity,0) + i.quantity) - et.quantity) < 0 THEN 1
	        		        END
                            ) FROM inventory i
                INNER JOIN exercise_tool et ON et.tool_id = i.id AND et.deleted_at IS NULL
                INNER JOIN exercise e ON e.id = et.exercise_id AND e.deleted_at IS NULL
                INNER JOIN exercise_meeting em ON em.exercise_id = e.id
                LEFT JOIN meeting_tool mt ON mt.tool_id = i.id AND mt.meeting_id = @ID_MEETING AND mt.deleted_at IS NULL
                WHERE em.meeting_id = @ID_MEETING
                ) > 0
            	BEGIN
	            	RAISERROR('Um dos exercícios possui itens que não possuem disponibilidade no momento',16,1)
	            END;
            /*=======================================================================================*/
            /*Descontar do estoque os itens utilizados no exercício*/
            UPDATE inv SET quantity = (
                SELECT i.quantity - SUM(IIF((et.quantity - ISNULL(mt.quantity,0) > 0),et.quantity - ISNULL(mt.quantity,0),0))
                FROM exercise_tool et
                INNER JOIN inventory i ON i.id = et.tool_id AND i.deleted_at IS NULL AND inv.id = i.id
                INNER JOIN exercise_meeting em ON em.exercise_id = et.exercise_id AND em.deleted_at IS NULL AND em.meeting_id = @ID_MEETING
                LEFT JOIN meeting_tool mt ON mt.meeting_id = em.meeting_id AND mt.deleted_at IS NULL
                GROUP BY i.quantity
            )
            FROM inventory inv
            INNER JOIN exercise_tool ext ON ext.tool_id = inv.id
            INNER JOIN exercise_meeting exm ON exm.exercise_id = ext.exercise_id AND exm.deleted_at IS NULL AND exm.meeting_id = @ID_MEETING
            /*=======================================================================================*/
             /*Inserir itens que foram utilizados no encontro*/
            INSERT INTO meeting_tool (meeting_id,tool_id,quantity) 
            (SELECT @ID_MEETING, et.tool_id, et.quantity FROM exercise_tool et
            INNER JOIN exercise_meeting em ON em.exercise_id = et.exercise_id AND em.deleted_at IS NULL
           	WHERE em.meeting_id = @ID_MEETING AND et.deleted_at IS NULL);
            /*=======================================================================================*/
            COMMIT;
        END TRY
        BEGIN CATCH;
            THROW
            ROLLBACK;
        END CATCH;
END;

/*Procedure para atualizar os dados de uma sala quando um encontro acaba*/
CREATE PROCEDURE proc_end_meeting_in_room @ID_MEETING INT, @ID_ROOM INT AS
BEGIN
    BEGIN TRAN
        BEGIN TRY
            /*Define que a sala não está mais ocupada*/
            UPDATE room SET occupied = 0 WHERE id = @ID_ROOM
    COMMIT;
        END TRY
        BEGIN CATCH
    ROLLBACK;
            THROW;
        END CATCH;
END;

/*Trigger para atualizar uma reunião de um atendimento quando esta inicia*/
CREATE TRIGGER tr_start_meeting ON "meeting" AFTER UPDATE AS
BEGIN
	IF UPDATE (started_at)
		BEGIN
			DECLARE @ID_MEETING INT;
			DECLARE @ID_ROOM INT;

			DECLARE start_meeting_cursor CURSOR FOR
			SELECT id as ID_MEETiNG, room_id AS ID_ROOM FROM inserted;

			OPEN start_meeting_cursor;

			FETCH NEXT FROM start_meeting_cursor INTO @ID_MEETING, @ID_ROOM;
			WHILE @@FETCH_STATUS = 0
				BEGIN
					EXEC proc_start_meeting_in_room @ID_MEETING, @ID_ROOM;
					EXEC proc_start_meeting_with_exercises @ID_MEETING;
					FETCH NEXT FROM start_meeting_cursor INTO @ID_MEETING, @ID_ROOM;
				END;
			CLOSE start_meeting_cursor;
			DEALLOCATE start_meeting_cursor;
		END;
END;

/*Trigger para atualizar uma reunião de um atendimento quando ele finaliza*/
CREATE TRIGGER tr_end_meeting ON "meeting" AFTER UPDATE AS 
BEGIN
	IF UPDATE (ended_at)
		BEGIN
			DECLARE @ID_MEETING INT;
			DECLARE @ID_ROOM INT;

			DECLARE end_meeting_cursor CURSOR FOR
			SELECT id as ID_MEETiNG, room_id AS ID_ROOM FROM inserted;

			OPEN end_meeting_cursor;

			FETCH NEXT FROM end_meeting_cursor INTO @ID_MEETING, @ID_ROOM;
			WHILE @@FETCH_STATUS = 0
				BEGIN
					EXEC proc_end_meeting_in_room @ID_MEETING, @ID_ROOM;
					FETCH NEXT FROM end_meeting_cursor INTO @ID_MEETING, @ID_ROOM;
				END;
			CLOSE end_meeting_cursor;
			DEALLOCATE end_meeting_cursor;
		END;
END;

CREATE VIEW vw_pacient AS
SELECT 
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


```

### Código do sistema:

Linguagem de Programação Javascript `<br>`

#### Backend = /corpus-back

#### Frontend = /corpus-front
