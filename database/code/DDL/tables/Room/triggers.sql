/*Trigger para atualizar a coluna updated_at (Atualizado em) quando um dado é atualizado*/
CREATE TRIGGER tr_update_room_updated_at ON "room" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('room', u.id) FROM inserted u;
END;