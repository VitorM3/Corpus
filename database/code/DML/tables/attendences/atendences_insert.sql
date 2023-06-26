select * from attendances

select p.id, u.name, u.id 
from pacient p, "user" u
where p.user_id = u.id

select p.id, p.sector_id, u.name, u.id 
from employee p, "user" u
where p.user_id = u.id

select e.* from employee e, sector s
where s.name like 'Attendent'
and e.sector_id = s.id

select * from employee;

SET IDENTITY_INSERT attendances ON
GO

insert into attendances(id, pacient_id, doctor_id, attendant_id, meetings_number, description)
values
(1, 35, 2, 6, 15, 'Teste'),
(2, 36, 3, 7, 30, 'Paciente com fratura no joelho'),
(3, 36, 4, 8, 30, 'Paciencom Osteoporose'),
(4, 36, 5, 10, 30, 'Reencaminhado passiente com hernia de disco'),
(5, 36, 32, 11, 15, 'Paciente com dor no ombro por conta da postura'),
(6, 36, 34, 10, 30, 'Paciente com dor no ombro por conta da postura'),
(7, 36, 40, 9, 30, 'Paciente com dor no ombro por conta da postura'),
(8, 36, 45, 8, 30, 'Paciente com dor no ombro por conta da postura');
