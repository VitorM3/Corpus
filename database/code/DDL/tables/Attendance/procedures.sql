CREATE PROCEDURE proc_attendance_report @ID INT, 
@PACIENT_NAME VARCHAR(50), 
@DOCTOR_NAME VARCHAR(50),
@DESCRIPTION VARCHAR(500),
@QTD_MEETINGS INT,
@QTD_MEETINGS_W_PRESENCE INT,
@QTD_MEETINGS_PRESENCE INT AS
BEGIN
	SET IDENTITY_INSERT attendance_report ON
insert into attendance_report (id,pacient_name,doctor_name,description,qtd_meetings,qtd_meetings_without_presence,qtd_meetings_presence) VALUES (@ID,@PACIENT_NAME,@DOCTOR_NAME,@DESCRIPTION,@QTD_MEETINGS,@QTD_MEETINGS_W_PRESENCE,@QTD_MEETINGS_PRESENCE);
SET IDENTITY_INSERT attendance_report OFF
END;