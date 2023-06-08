/*Trigger para atualizar a coluna updated_at (Atualizado em) quando um dado é atualizado*/
CREATE TRIGGER tr_update_pacient_updated_at ON "pacient" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('pacient', u.id) FROM inserted u;
END;