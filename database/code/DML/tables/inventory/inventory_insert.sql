select * from inventory

SET IDENTITY_INSERT inventory ON
GO

insert into inventory(id, name, quantity)
values
(1, 'Maca de fisioterapia', 10),
(3, 'Eletroterapia', 15),
(4, 'Ultrassom terap�utico', 5),
(5, 'bolas su��as', 8),
(6, 'halteres', 12),
(7, 'pranchas de equil�brio', 3),
(8, 'faixas el�sticas', 7),
(9, 'copos de v�cuo', 6),
(10, 'banheiras de contraste', 1),
(11, 'compressas quentes', 22),
(12, 'bolsas de gelo', 15),
(13, 'fitas m�tricas', 5),
(14, 'dinam�metros de for�a muscular', 4),
(15, 'M�quina de ondas de choque', 11),
(16, 'Esteira ergom�trica', 3),
(17, 'Bicicleta ergom�trica', 2),
(18, 'Barra paralela', 2),
(19, 'Plataforma de equil�brio', 4),
(20, 'Infravermelho ', 7),
(21, 'Mesa de tra��o cervical ', 2),
(22, 'aparelhos de biofeedback', 5),
(23, 'aparelhos de neuromuscular el�trica', 8),
(24, 'goni�metros de medi��o', 5);