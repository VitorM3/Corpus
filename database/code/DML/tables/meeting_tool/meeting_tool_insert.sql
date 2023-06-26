select * from meeting_tool

select * from meeting

select * from inventory

SET IDENTITY_INSERT meeting_tool ON
GO

insert into meeting_tool(id, meeting_id,tool_id,quantity)
values
(1, 1, 5, 2),
(2, 1, 6, 4),
(3, 2, 5, 2),
(4, 2, 6, 4),
(5, 31, 3, 1),
(6, 32, 3, 1),
(7, 33, 3, 1),
(8, 34, 1, 1),
(9, 35, 1, 1),
(10, 36, 1, 1),
(11, 37, 5, 2),
(12, 38, 5, 2),
(13, 39, 5, 2),
(14, 40, 5, 2),
(15, 41, 5, 2),
(16, 42, 18, 1),
(17, 43, 18, 1),
(18, 44, 18, 1),
(19, 45, 18, 1);