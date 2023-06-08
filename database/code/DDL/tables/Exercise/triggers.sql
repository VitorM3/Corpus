/*Trigger para atualizar a coluna updated_at (Atualizado em) quando um dado é atualizado*/
CREATE TRIGGER tr_update_exercise_updated_at ON "exercise" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('exercise', u.id) FROM inserted u;
END;