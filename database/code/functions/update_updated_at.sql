/*Executar uma Procedure dentro de uma função*/
CREATE FUNCTION execute_procedure_in_function(@NAME_PROCEDURE VARCHAR(50)) RETURNS VARCHAR
BEGIN
DECLARE @COMMAND nvarchar(150) = N'EXEC [@NAME_PROCEDURE]'
EXEC sp_executesql @COMMAND, @NAME_PROCEDURE
RETURN 'Sucesso'
END;