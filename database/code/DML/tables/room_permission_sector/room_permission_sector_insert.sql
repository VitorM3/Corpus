select * from room_permission_sector

SET IDENTITY_INSERT room_permission_sector ON
GO

insert into room_permission_sector(id, sector_id, room_id)
values
(1, 5, 1),
(2, 5, 2),
(3, 5, 3),
(4, 5, 4),
(5, 5, 5),
(6, 5, 6);
