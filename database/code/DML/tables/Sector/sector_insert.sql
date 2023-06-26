select * from sector

SET IDENTITY_INSERT sector ON
GO

insert into sector(id, name)
values(1, 'Teste');

insert into sector(id, name)
values
(2, 'Atendimento'),
(3, 'Manutenção'),
(4, 'Limpesa'),
(5, 'Medico');