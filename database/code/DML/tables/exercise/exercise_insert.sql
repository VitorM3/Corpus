select * from exercise

SET IDENTITY_INSERT exercise on
GO

insert into exercise(id, name, description, knowledge_font)
values
(1, 'Tratamentos com eletroterapia', 'tratamento fisioterap�utico que usa aparelhos espec�ficos que emitem correntes el�tricas, por meio de eletrodos que s�o fixados na superf�cie da pele.','Tratamentos para fortalecimento muscular'),
(2,'Termoterapia','pode ser realizada atrav�s de ultrassom ou diatermia por ondas curtas. O tratamento � baseado na mudan�a de temperatura dos tecidos corporais.','Tratamentos para fortalecimento muscular'),
(3,'Fototerapia','tratamento cujo princ�pio � o contato da irradia��o eletromagn�tica emitida pela luz, por meio de f�tons, com os tecidos biol�gicos humanos.','Tratamentos para fortalecimento muscular'),
(4,'Fisioterapia aqu�tica','auxilia o processo de fortalecimento muscular, sendo considerado o tratamento mais precoce, uma vez que ela n�o utiliza cargas e adota, como t�cnica principal, a flutua��o por meio de movimentos funcionais suaves e de baixo impacto.','Tratamentos para fortalecimento muscular'),
(5,'Crioterapia','consiste na aplica��o do gelo (imers�o ou local), por um per�odo de 5 a 15 minutos, geralmente ap�s o exerc�cio, o que leva � vasoconstri��o e � redu��o do aporte sangu�neo.','Tratamentos para fortalecimento muscular'),
(6,'alongamento de membros superiores e inferiores','alongamento de membros superiores e inferiores','Tratamento para Atrite'),
(7,'infra-vermelho','por 25 minutos, objetivando diminui��o do espasmo muscular e diminui��o da dor','Tratamento para Atrite'),
(8,'massoterapia em regi�o lombar','massoterapia em regi�o lombar, para promo��o de relaxamento muscular','Tratamento para Atrite'),
(9,'laser, AsGa, 3 Joules','laser, AsGa (Arsenieto de G�lio, 904 nm), 3 Joules, com t�cnica pontual, para redu��o do processo inflamat�rio, atrav�s da diminui��o da produ��o e libera��o de prostaglandinas','Tratamento para Atrite'),
(10,'uso da bola su��a','uso da bola su��a para realiza��o de exerc�cios, objetivando melhora do equil�brio, manuten��o da amplitude de movimento, ganho de for�a muscular, corre��o postural, trabalho de respira��o, percep��o corporal no espa�o, aumento da confian�a e auto-estima, auxiliando no bem-estar geral da paciente, favorecendo suas atividades da vida di�ria ','Tratamento para Atrite'),
(11,'Exerc�cios de alongamento','Durante as sess�es de Fisioterapia o profissional ir� trabalhar de maneira personalizada, ou seja, adaptar cada exerc�cio �s necessidades individuais de cada paciente ','Osteoporose'),
(12,'coordena��o e equil�brio','Durante as sess�es de Fisioterapia o profissional ir� trabalhar de maneira personalizada, ou seja, adaptar cada exerc�cio �s necessidades individuais de cada paciente ','Osteoporose'),
(13,'Pilates','Durante as sess�es de Fisioterapia o profissional ir� trabalhar de maneira personalizada, ou seja, adaptar cada exerc�cio �s necessidades individuais de cada paciente ','Osteoporose'),
(14,'Caminhada','Durante as sess�es de Fisioterapia o profissional ir� trabalhar de maneira personalizada, ou seja, adaptar cada exerc�cio �s necessidades individuais de cada paciente ','Osteoporose'),
(15,'Laserterapia ','O t�nel do carpo � um espa�o que recobre os ossos do carpo, possibilitando a sua articula��o. O paciente geralmente apresenta dorm�ncia na regi�o do nervo mediano.','S�ndrome do t�nel do carpo'),
(16,'Libera��o miofascial ','O t�nel do carpo � um espa�o que recobre os ossos do carpo, possibilitando a sua articula��o. O paciente geralmente apresenta dorm�ncia na regi�o do nervo mediano.','S�ndrome do t�nel do carpo'),
(17,'Eletrotermofototerapia','Aparelhos como ultrassom, TENS ou laser podem ser usados como anti-inflamat�rios que ajudam a aliviar os sintomas, ','H�rnia de Disco');