/*Trigger para atualizar a coluna updated_at (Atualizado em) quando um dado é atualizado*/
CREATE TRIGGER tr_update_attendances_updated_at ON "attendances" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('attendances', u.id) FROM inserted u;
END;