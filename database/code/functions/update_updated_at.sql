/*Função para atualizar a coluna updated_at (atualizado em) de forma dinâmica*/
CREATE FUNCTION update_updated_at (@NAME_TABLE VARCHAR(30), @ID INT) RETURNS INT AS 
BEGIN
DECLARE @COMMAND nvarchar(150) = N'UPDATE QUOTENAME(@NAME_TABLE) SET updated_at = GETDATE() WHERE id = @ID'
EXEC sp_executesql @COMMAND, @ID
RETURN 1
END;
