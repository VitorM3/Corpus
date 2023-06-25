/*View para a busca de pacientes*/
CREATE VIEW vw_pacient AS
SELECT 
u.name as name,
u.email as email,
u.cpf as cpf,
p.phone as phone,
p.phone_alternative as phone_alternative,
p.sus_code as sus_code,
p.unimed_code as unimed_code,
p.created_at as created_at
 FROM pacient p
INNER JOIN [user] u ON u.id = p.user_id
WHERE u.deleted_at IS NULL and p.deleted_at IS NULL