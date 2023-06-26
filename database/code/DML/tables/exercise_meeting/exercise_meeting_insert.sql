select * from exercise_meeting

SET IDENTITY_INSERT exercise_meeting on
GO

insert into exercise_meeting(id, exercise_id, meeting_id)
values
(1, 1, 2),
(2, 1, 2),
(3, 1, 2),
(4, 1, 2),
(5, 1, 31),
(6, 1, 32),
(7, 1, 33),
(8, 6, 34),
(9, 6, 35),
(10, 6, 36),
(11, 6, 37),
(12, 6, 38),
(13, 6, 39),
(14, 6, 40),
(15, 6, 41),
(16, 6, 42),
(17, 6, 43),
(18, 6, 44),
(19, 6, 45);