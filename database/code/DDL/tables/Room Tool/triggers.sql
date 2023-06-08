/*Trigger para atualizar a coluna updated_at (Atualizado em) quando um dado é atualizado*/
CREATE TRIGGER tr_update_room_tool_updated_at ON "room_tool" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('room_tool', u.id) FROM inserted u;
END;