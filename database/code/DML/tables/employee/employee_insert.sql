select * from employee

select * from sector;

select * from pacient;

select * from "user" 
where id not in (select user_id from pacient)
and id not in (select user_id from employee);

SET IDENTITY_INSERT employee ON
GO

insert into employee(id, user_id, sector_id, access_code)
values(1, 1, 1, 'HIM73C8JP012')

insert into employee(id, user_id, sector_id, access_code)
values
(2, 6, 5, 'HIM73C8JP012'),
(3, 7, 5, 'HIM73C8JP012'),
(4, 8, 5, 'HIM73C8JP012'),
(5, 9, 5, 'HIM73C8JP012');

insert into employee(id, user_id, sector_id, access_code)
values
(6, 70, 2, '9IW02YPJ7YV3'),
(7, 71, 2, 'D86ER821KGZH'),
(8, 72, 2, '5Q148HX5356R'),
(9, 73, 2, 'FZ0V9P85O4NI'),
(10, 74, 2, '46AKC7735S4C'),
(11, 75, 2, 'ABR7810JUQ73'),
(12, 76, 3, '1D9K59218B23'),
(13, 77, 3, 'V250F2M36RAU'),
(14, 78, 3, '9W2KS974SY95'),
(15, 79, 3, 'IWU423URD47I'),
(16, 80, 3, 'OT33GF8E3C37'),
(17, 81, 3, '321J3228X4B3'),
(18, 82, 3, 'R95LH4D4044W'),
(19, 83, 3, '704GEQL8V615'),
(20, 84, 3, 'M5V5W3R31X38'),
(21, 85, 3, '1N2QWEWC6GIP'),
(22, 86, 3, '56EH9JM200UN'),
(23, 87, 4, 'P6H4FA59K2BX'),
(24, 88, 4, '39NM236OM5M4'),
(25, 89, 4, '2RSNE8114805'),
(26, 90, 4, 'F7PC0FJ4959Y'),
(27, 91, 4, '0YSG1D69OV15'),
(28, 92, 4, '54364H9W4N7N'),
(29, 93, 4, 'SIAF07P9KUKB'),
(30, 94, 4, 'UN99P2YO4D3J'),
(31, 95, 4, 'ZAHI6OD81F60'),
(32, 96, 5, '550M6Z80209T'),
(33, 97, 5, 'Y7AVP4GF1X2B'),
(34, 98, 5, 'F922H92G1V22'),
(35, 99, 5, 'K4MXCKO6RGGP'),
(36, 100, 5, 'SQO48946C8WT'),
(37, 101, 5, 'D0015HPR25LL'),
(38, 102, 5, '317HBMOP2Y81'),
(39, 103, 5, 'WQYDI8TFUUPC'),
(40, 104, 5, '3120F6EYG92L'),
(41, 105, 5, 'XW320H04XG6Y'),
(42, 106, 5, 'W6Z18VQR1D1A'),
(43, 107, 5, 'R0XLB17RQA8D'),
(44, 108, 5, '06T4BU18GSPX'),
(45, 109, 5, '7Z9YGMTYX48A');