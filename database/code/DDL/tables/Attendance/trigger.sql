CREATE TRIGGER tr_attendance_report ON "attendances" AFTER  INSERT AS
BEGIN
			DECLARE @ID INT;
			DECLARE @PACIENT_NAME VARCHAR(50);
            DECLARE @DOCTOR_NAME VARCHAR(50);
            DECLARE @DESCRIPTION VARCHAR(500);
            DECLARE @QTD_MEETINGS INT;
            DECLARE @QTD_MEETINGS_W_PRESENCE INT;
            DECLARE @QTD_MEETINGS_PRESENCE INT;
			
			DECLARE attendance_report_cursor CURSOR FOR
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
FROM inserted a
INNER JOIN pacient p on p.id = a.pacient_id
INNER JOIN [user] u ON u.id = p.user_id
INNER JOIN employee att ON att.id = a.attendant_id
INNER JOIN [user] attu ON attu.id = att.user_id
INNER JOIN employee d ON d.id = a.doctor_id
INNER JOIN [user] du ON du.id = d.user_id
INNER JOIN meeting m ON m.attendances_id = a.id 
GROUP BY a.id,u.name,du.name,a.description;
			
			OPEN attendance_report_cursor;
		
			FETCH NEXT FROM attendance_report_cursor INTO 
            @ID, @PACIENT_NAME, @DOCTOR_NAME, @DESCRIPTION, @QTD_MEETINGS, @QTD_MEETINGS_W_PRESENCE, @QTD_MEETINGS_PRESENCE ;
			WHILE @@FETCH_STATUS = 0
				BEGIN
					EXEC proc_attendance_report @ID, @PACIENT_NAME, @DOCTOR_NAME, @DESCRIPTION, @QTD_MEETINGS, @QTD_MEETINGS_W_PRESENCE, @QTD_MEETINGS_PRESENCE;
				END;
			CLOSE attendance_report_cursor;
			DEALLOCATE attendance_report_cursor;
END;