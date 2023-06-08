/*Trigger para atualizar a coluna updated_at (Atualizado em) quando um dado é atualizado*/
CREATE TRIGGER tr_update_room_permission_sector_updated_at ON "room_permission_sector" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('room_permission_sector', u.id) FROM inserted u;
END;