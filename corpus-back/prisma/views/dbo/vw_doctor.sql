SELECT
  u.id AS id,
  u.name AS name,
  u.email AS email,
  u.cpf AS cpf,
  e.access_code AS access_code
FROM
  [user] AS u
  JOIN employee AS e ON e.user_id = u.id
  JOIN sector AS s ON s.id = e.sector_id
WHERE
  s.name = 'DOCTOR';