select * from exercise

SET IDENTITY_INSERT exercise on
GO

insert into exercise(id, name, description, knowledge_font)
values
(1, 'Tratamentos com eletroterapia', 'tratamento fisioterapêutico que usa aparelhos específicos que emitem correntes elétricas, por meio de eletrodos que são fixados na superfície da pele.','Tratamentos para fortalecimento muscular'),
(2,'Termoterapia','pode ser realizada através de ultrassom ou diatermia por ondas curtas. O tratamento é baseado na mudança de temperatura dos tecidos corporais.','Tratamentos para fortalecimento muscular'),
(3,'Fototerapia','tratamento cujo princípio é o contato da irradiação eletromagnética emitida pela luz, por meio de fótons, com os tecidos biológicos humanos.','Tratamentos para fortalecimento muscular'),
(4,'Fisioterapia aquática','auxilia o processo de fortalecimento muscular, sendo considerado o tratamento mais precoce, uma vez que ela não utiliza cargas e adota, como técnica principal, a flutuação por meio de movimentos funcionais suaves e de baixo impacto.','Tratamentos para fortalecimento muscular'),
(5,'Crioterapia','consiste na aplicação do gelo (imersão ou local), por um período de 5 a 15 minutos, geralmente após o exercício, o que leva à vasoconstrição e à redução do aporte sanguíneo.','Tratamentos para fortalecimento muscular'),
(6,'alongamento de membros superiores e inferiores','alongamento de membros superiores e inferiores','Tratamento para Atrite'),
(7,'infra-vermelho','por 25 minutos, objetivando diminuição do espasmo muscular e diminuição da dor','Tratamento para Atrite'),
(8,'massoterapia em região lombar','massoterapia em região lombar, para promoção de relaxamento muscular','Tratamento para Atrite'),
(9,'laser, AsGa, 3 Joules','laser, AsGa (Arsenieto de Gálio, 904 nm), 3 Joules, com técnica pontual, para redução do processo inflamatório, através da diminuição da produção e liberação de prostaglandinas','Tratamento para Atrite'),
(10,'uso da bola suíça','uso da bola suíça para realização de exercícios, objetivando melhora do equilíbrio, manutenção da amplitude de movimento, ganho de força muscular, correção postural, trabalho de respiração, percepção corporal no espaço, aumento da confiança e auto-estima, auxiliando no bem-estar geral da paciente, favorecendo suas atividades da vida diária ','Tratamento para Atrite'),
(11,'Exercícios de alongamento','Durante as sessões de Fisioterapia o profissional irá trabalhar de maneira personalizada, ou seja, adaptar cada exercício às necessidades individuais de cada paciente ','Osteoporose'),
(12,'coordenação e equilíbrio','Durante as sessões de Fisioterapia o profissional irá trabalhar de maneira personalizada, ou seja, adaptar cada exercício às necessidades individuais de cada paciente ','Osteoporose'),
(13,'Pilates','Durante as sessões de Fisioterapia o profissional irá trabalhar de maneira personalizada, ou seja, adaptar cada exercício às necessidades individuais de cada paciente ','Osteoporose'),
(14,'Caminhada','Durante as sessões de Fisioterapia o profissional irá trabalhar de maneira personalizada, ou seja, adaptar cada exercício às necessidades individuais de cada paciente ','Osteoporose'),
(15,'Laserterapia ','O túnel do carpo é um espaço que recobre os ossos do carpo, possibilitando a sua articulação. O paciente geralmente apresenta dormência na região do nervo mediano.','Síndrome do túnel do carpo'),
(16,'Liberação miofascial ','O túnel do carpo é um espaço que recobre os ossos do carpo, possibilitando a sua articulação. O paciente geralmente apresenta dormência na região do nervo mediano.','Síndrome do túnel do carpo'),
(17,'Eletrotermofototerapia','Aparelhos como ultrassom, TENS ou laser podem ser usados como anti-inflamatórios que ajudam a aliviar os sintomas, ','Hérnia de Disco');