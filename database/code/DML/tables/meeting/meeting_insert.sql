select * from meeting

select * from room

select * from attendances

SET IDENTITY_INSERT meeting ON
GO

insert into meeting(id, room_id, attendances_id, appointment)
values
(1, 6, 2, '2023-07-05'),
(2, 6, 2, '2023-07-06'),
(3, 6, 2, '2023-07-07'),
(4, 6, 2, '2023-07-08'),
(5, 3, 2, '2023-07-09'),
(6, 3, 2, '2023-07-10'),
(7, 3, 2, '2023-07-11'),
(8, 3, 2, '2023-07-12'),
(9, 3, 2, '2023-07-13');

insert into meeting(id, room_id, attendances_id, appointment)
values
(10, 3, 2, '2023-07-14'),
(11, 3, 2, '2023-07-15'),
(12, 3, 2, '2023-07-16'),
(13, 3, 2, '2023-07-17'),
(14, 3, 2, '2023-07-18'),
(15, 3, 2, '2023-07-19'),
(16, 3, 2, '2023-07-20'),
(17, 3, 2, '2023-07-21'),
(18, 3, 2, '2023-07-22'),
(19, 3, 2, '2023-07-23'),
(20, 2, 2, '2023-07-24'),
(21, 2, 2, '2023-07-25'),
(22, 2, 2, '2023-07-26'),
(23, 2, 2, '2023-07-27'),
(24, 2, 2, '2023-07-28'),
(25, 2, 2, '2023-07-29'),
(26, 2, 2, '2023-07-30'),
(27, 2, 2, '2023-07-31'),
(28, 2, 2, '2023-08-01'),
(29, 2, 2, '2023-08-02'),
(30, 2, 2, '2023-08-03'),
--
(31, 4, 5, '2023-07-12'),
(32, 4, 5, '2023-07-13'),
(33, 4, 5, '2023-07-14'),
(34, 5, 5, '2023-07-15'),
(35, 5, 5, '2023-07-16'),
(36, 5, 5, '2023-07-17'),
(37, 5, 5, '2023-07-18'),
(38, 5, 5, '2023-07-19'),
(39, 5, 5, '2023-07-20'),
(40, 5, 5, '2023-07-21'),
(41, 5, 5, '2023-07-22'),
(42, 5, 5, '2023-07-23'),
(43, 5, 5, '2023-07-24'),
(44, 5, 5, '2023-07-25'),
(45, 5, 5, '2023-07-26');