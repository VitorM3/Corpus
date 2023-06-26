CREATE FUNCTION dbo.f_encript_password(@senha VARCHAR(100))
RETURNS VARBINARY(3000)
AS
BEGIN
    DECLARE @hashSenha VARBINARY(3000);

    -- Gerar o hash da senha usando o algoritmo SHA2_256
    SET @hashSenha = HASHBYTES('SHA2_256', @senha);

    RETURN @hashSenha;
END;