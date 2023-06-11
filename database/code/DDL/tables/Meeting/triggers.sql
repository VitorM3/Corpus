/*Trigger para atualizar a coluna updated_at (Atualizado em) quando um dado é atualizado*/
CREATE TRIGGER tr_update_meeting_updated_at ON "meeting" AFTER UPDATE AS 
BEGIN
	SELECT dbo.update_updated_at('meeting', u.id) FROM inserted u;
END;

/*Trigger para atualizar uma reunião de um atendimento quando esta inicia*/
CREATE TRIGGER tr_start_meeting ON "meeting" AFTER UPDATE AS
BEGIN
	IF UPDATE (started_at)
		BEGIN
			DECLARE @ID_MEETING INT;
			DECLARE @ID_ROOM INT;
			
			DECLARE start_meeting_cursor CURSOR FOR
			SELECT id as ID_MEETiNG, room_id AS ID_ROOM FROM inserted;
			
			OPEN start_meeting_cursor;
		
			FETCH NEXT FROM start_meeting_cursor INTO @ID_MEETING, @ID_ROOM;
			WHILE @@FETCH_STATUS = 0
				BEGIN
					EXEC proc_start_meeting_in_room @ID_MEETING, @ID_ROOM;
					EXEC proc_start_meeting_with_exercises @ID_MEETING;
					FETCH NEXT FROM start_meeting_cursor INTO @ID_MEETING, @ID_ROOM;
				END;
			CLOSE start_meeting_cursor;
			DEALLOCATE start_meeting_cursor;	
		END;
END;