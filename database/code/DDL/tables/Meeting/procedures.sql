/*Procedure para atualizar os dados se uma sala quando um encontro inicia*/
CREATE PROCEDURE proc_start_meeting_in_room @ID_MEETING INT, @ID_ROOM INT AS
BEGIN
    BEGIN TRAN
        BEGIN TRY
            /*Verificar se a sala pode ser usada*/
        	IF (SELECT occupied FROM room WHERE id = @ID_ROOM) = 1
        		BEGIN 
	        		RAISERROR('A Sala no momento está ocupada para marcar este encontro',16,1)
	       		END;
	       	/*====================================================================================*/
           /*Verificar se a sala pode ser usada*/
        	IF (SELECT COUNT(1) FROM room WHERE deleted_at IS NOT NULL AND id = @ID_ROOM) >= 1
        		BEGIN 
	        		RAISERROR('A Sala no momento não está disponível para marcar este encontro',16,1)
	       		END;
	       	/*====================================================================================*/
            /*Inserir itens que foram utilizados no encontro*/
            INSERT INTO meeting_tool (meeting_id,tool_id,quantity) 
            (SELECT @ID_MEETING as meeting_id, tool_id, quantity FROM room_tool WHERE room_id = @ID_ROOM);
			/*======================================================================================*/
           /*Definir que a sala está ocupada*/
           UPDATE room SET occupied = 1 WHERE id = @ID_ROOM
           /*========================================================================================*/
    COMMIT;
        END TRY
        BEGIN CATCH
    ROLLBACK;
            THROW;
        END CATCH;

END;

/*Procedure para adicionar os dados dos exercícios presentes em uma reunião*/
CREATE PROCEDURE proc_start_meeting_with_exercises @ID_MEETING INT AS
BEGIN
    BEGIN TRAN
        BEGIN TRY
            /*Verificar se a sala pode ser usada*/
        	IF (SELECT COUNT(1) FROM exercise_meeting WHERE deleted_at IS NOT NULL AND meeting_id = @ID_MEETING) >= 1
        		BEGIN 
	        		RAISERROR('Um dos Exercícios não está mais disponível para ser realizado no encontro',16,1)
	       		END;
	       	/*====================================================================================*/
            /*Verificar se um destes itens não está disponível para uso*/
            IF (SELECT COUNT(
            		        CASE
	            		        WHEN ((IFNULL(mt.quantity,0) + i.quantity) - et.quantity) < 0 THEN 1
	        		        END
                            ) FROM inventory i
                INNER JOIN exercise_tool et ON et.tool_id = i.id
                INNER JOIN exercise e ON e.id = et.exercise_id
                INNER JOIN exercise_meeting em ON em.exercise_id = e.id
                LEFT JOIN meeting_tool mt ON mt.tool_id = e.id AND mt.meeting_id = @ID_MEETING
                WHERE em.meeting_id = @ID_MEETING 
                ) > 0
            	BEGIN
	            	RAISERROR('Um dos exercícios possui itens que não possuem disponibilidade no momento',16,1)
	            END;
            /*=======================================================================================*/
            /*Descontar do estoque os itens utilizados no exercício*/
            //
            UPDATE i SET i.quantity = i.quantity - SUM(GREATEST(et.quantity - IFNULL(mt.quantity,0),0)) 
            FROM inventory i 
            INNER JOIN exercise_tool et ON et.tool_id = i.id
            LEFT JOIN meeting_tool mt ON mt.tool_id = e.id AND mt.meeting_id = @ID_MEETING 
            /*=======================================================================================*/
             /*Inserir itens que foram utilizados no encontro*/
            INSERT INTO meeting_tool (meeting_id,tool_id,quantity) 
            (SELECT @ID_MEETING as meeting_id, tool_id, quantity FROM exercise_tool WHERE meeting_id = @ID_MEETING);
            /*=======================================================================================*/
            COMMIT;
        END TRY;
        BEGIN CATCH;
            THROW
            ROLLBACK;
        END CATCH;
END;



