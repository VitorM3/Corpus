SELECT
  a.id AS id,
  u.name AS pacient_name,
  du.name AS doctor_name,
  a.description AS description,
  COUNT(DISTINCT m.id) AS qtd_meetings,
  COUNT(
    CASE
      WHEN m.started_at IS NULL THEN 1
    END
  ) AS qtd_meetings_without_presence,
  COUNT(
    CASE
      WHEN m.started_at IS NOT NULL THEN 1
    END
  ) AS qtd_meetings_presence
FROM
  attendances AS a
  JOIN pacient AS p ON p.id = a.pacient_id
  JOIN [user] AS u ON u.id = p.user_id
  JOIN employee AS att ON att.id = a.attendant_id
  JOIN [user] AS attu ON attu.id = att.user_id
  JOIN employee AS d ON d.id = a.doctor_id
  JOIN [user] AS du ON du.id = d.user_id
  JOIN meeting AS m ON m.attendances_id = a.id
GROUP BY
  a.id,
  u.name,
  du.name,
  a.description;