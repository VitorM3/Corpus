/*Trigger para atualizar a coluna updated_at (Atualizado em) quando um dado é atualizado*/
CREATE TRIGGER tr_update_sector_updated_at ON "sector" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('sector', u.id) FROM inserted u;
END;