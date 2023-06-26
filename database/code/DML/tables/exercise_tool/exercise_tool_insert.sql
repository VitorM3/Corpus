select * from exercise_tool

select * from exercise

select * from inventory

SET IDENTITY_INSERT exercise_tool on
GO

insert into exercise_tool(id, exercise_id, tool_id, quantity)
values
(1, 7, 20, 1);