/*Trigger para atualizar a coluna updated_at (Atualizado em) quando um dado é atualizado*/
CREATE TRIGGER tr_update_inventory_updated_at ON "inventory" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('inventory', u.id) FROM inserted u;
END;