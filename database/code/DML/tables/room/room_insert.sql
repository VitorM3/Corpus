select * from room

SET IDENTITY_INSERT room ON
GO

insert into room(id, name)
values
(1, 'Sala 1');

insert into room(id, name)
values
(2, 'Sala 3'),
(3, 'Sala 4'),
(4, 'Sala de ginastica'),
(5, 'Sala de eletroterapia'),
(6, 'Sala de tratamento a lase');