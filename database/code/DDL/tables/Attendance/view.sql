/*View para a tela de visualização*/
CREATE VIEW vw_attendance_find_all AS 
SELECT
a.id as id,
u.name as pacient_name,
du.name as doctor_name,
a.description as description,
COUNT (DISTINCT m.id) as qtd_meetings,
COUNT (
CASE 
	WHEN m.started_at IS NULL THEN 1
END
) as qtd_meetings_without_presence,
COUNT (
CASE 
	WHEN m.started_at IS NOT NULL THEN 1
END
) as qtd_meetings_presence
FROM attendances a
INNER JOIN pacient p on p.id = a.pacient_id
INNER JOIN [user] u ON u.id = p.user_id
INNER JOIN employee att ON att.id = a.attendant_id
INNER JOIN [user] attu ON attu.id = att.user_id
INNER JOIN employee d ON d.id = a.doctor_id
INNER JOIN [user] du ON du.id = d.user_id
INNER JOIN meeting m ON m.attendances_id = a.id
where a.deleted_at IS NULL 
GROUP BY a.id,u.name,du.name,a.description