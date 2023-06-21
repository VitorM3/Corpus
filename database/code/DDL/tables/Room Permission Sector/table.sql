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
