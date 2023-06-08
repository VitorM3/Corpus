/*Trigger para atualizar a coluna updated_at (Atualizado em) quando um dado é atualizado*/
CREATE TRIGGER tr_update_employee_updated_at ON "employee" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('employee', u.id) FROM inserted u;
END;