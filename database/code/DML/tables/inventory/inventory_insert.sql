select * from inventory

SET IDENTITY_INSERT inventory ON
GO

insert into inventory(id, name, quantity)
values
(1, 'Maca de fisioterapia', 10),
(3, 'Eletroterapia', 15),
(4, 'Ultrassom terapêutico', 5),
(5, 'bolas suíças', 8),
(6, 'halteres', 12),
(7, 'pranchas de equilíbrio', 3),
(8, 'faixas elásticas', 7),
(9, 'copos de vácuo', 6),
(10, 'banheiras de contraste', 1),
(11, 'compressas quentes', 22),
(12, 'bolsas de gelo', 15),
(13, 'fitas métricas', 5),
(14, 'dinamômetros de força muscular', 4),
(15, 'Máquina de ondas de choque', 11),
(16, 'Esteira ergométrica', 3),
(17, 'Bicicleta ergométrica', 2),
(18, 'Barra paralela', 2),
(19, 'Plataforma de equilíbrio', 4),
(20, 'Infravermelho ', 7),
(21, 'Mesa de tração cervical ', 2),
(22, 'aparelhos de biofeedback', 5),
(23, 'aparelhos de neuromuscular elétrica', 8),
(24, 'goniômetros de medição', 5);