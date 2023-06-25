SELECT
  u.id AS id,
  u.name AS name,
  u.email AS email,
  u.cpf AS cpf,
  p.phone AS phone,
  p.phone_alternative AS phone_alternative,
  p.sus_code AS sus_code,
  p.unimed_code AS unimed_code,
  p.created_at AS created_at
FROM
  pacient AS p
  JOIN [user] AS u ON u.id = p.user_id
WHERE
  u.deleted_at IS NULL
  AND p.deleted_at IS NULL;