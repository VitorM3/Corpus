select * from sector

SET IDENTITY_INSERT sector ON
GO

insert into sector(id, name)
values(1, 'Teste');

insert into sector(id, name)
values
(2, 'ATTENDANCE'),
(3, 'MAINTENANCE'),
(4, 'CLEANING'),
(5, 'DOCTOR');