/*Trigger para atualizar a coluna updated_at (Atualizado em) quando um dado é atualizado*/
CREATE TRIGGER tr_update_user_updated_at ON "user" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('user', u.id) FROM inserted u;
END;