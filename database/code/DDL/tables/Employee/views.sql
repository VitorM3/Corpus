/*View para buscar os colaboradores*/
CREATE VIEW vw_doctor AS
SELECT
u.id as id,
u.name as name,
u.email as email,
u.cpf as cpf,
e.access_code as access_code
FROM [user] u
INNER JOIN employee e ON e.user_id = u.id
INNER JOIN sector s ON s.id = e.sector_id
WHERE s.name = 'DOCTOR'