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
