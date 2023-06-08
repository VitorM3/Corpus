/*Criar tabela de exercícios feitos em cada encontro*/
CREATE TABLE exercise_meeting(
    id INT IDENTITY(1,1) PRIMARY KEY,
    exercise_id INT NOT NULL,
    meeting_id INT NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    deleted_at DATETIME,
    CONSTRAINT fk_exercise_exercise_meeting FOREIGN KEY (exercise_id) REFERENCES exercise(id),
    CONSTRAINT fk_meeting_exercise_meeting FOREIGN KEY (meeting_id) REFERENCES meeting(id),
);