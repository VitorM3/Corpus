/*Trigger para atualizar a coluna updated_at (Atualizado em) quando um dado é atualizado*/
CREATE TRIGGER tr_update_meeting_updated_at ON "meeting" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('meeting', u.id) FROM inserted u;
END;