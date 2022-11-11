---------------------------------------
-- Triplebyte SQL Quiz Demo Database --
---------------------------------------
-- DDL V0.3 -- November 1st 2021 ------
---------------------------------------
/* 
Change log 
-----------
V0.2
----
1. Replaced SSN with Email as person identifier

V0.3
1. Removed Vaccinations.Batch 
2. Removed Vaccination_Sites.Capacity

*/

INSERT INTO Persons (Email, First_Name, Last_Name, Date_of_Birth, Sex)
VALUES 	('jimbo@gmail.com', 'Jim', 'Bo', '1980-02-12', 'M'),
		('ashok.k@yahoo.com', 'Ashok', 'Kumar', '1965-12-21', 'M'),
		('sveta123@hotmail.com', 'Svetlana', 'Bulova', '1990-10-19', 'F'),
		('latisha88@gmail.com', 'Latisha', 'Jones', '1988-01-06', 'F'),
		('chen.lee233@icloud.com', 'Chen', 'Lee', '1998-06-06', 'M'),
		('saint_m@gmail.com', 'Maria', 'Chadwick', '1959-08-09', 'F'),
		('blee_dragon@gmail.com', 'Bruce', 'Lee', '1990-04-30', 'M'),
		('wild_one99@yahoo.com', 'Dianne', 'Wilder', '2001-01-29', 'F');

INSERT INTO Nurses (Email)
VALUES 	('jimbo@gmail.com'),
		('saint_m@gmail.com'),
		('sveta123@hotmail.com');

INSERT INTO Cities (City,State)
VALUES 	('San Francisco', 'California'),
		('Baltimore', 'Mariland'),
		('Detroit','Michigan'),
		('Seattle', 'Washington');

INSERT INTO Vaccine_Providers (Company)
VALUES	('Pfizer'), 
		('Moderna'),
		('Johnson and Johnson');

INSERT INTO Vaccination_Sites (Site, Address, City, State, Opens, Closes)
VALUES 	('SF Public Library', '100 Larkin Street', 'San Francisco', 'California', '08:00:00', '17:00:00'),
		('NE Market', '2101 Eeast Monument Street', 'Baltimore', 'Maryland', '11:30:00', '16:00:00'),
		('Samaritan Center', '5555 Conner Ave', 'Detroit','Michigan', '14:00:00', '19:00:00');

INSERT INTO Vaccinations (Recipient, Vaccination_Time, Vaccine, Site, Nurse, Comments)
VALUES 	('jimbo@gmail.com', '2020-12-12T07:54:00', 'Pfizer', 'SF Public Library', 'jimbo@gmail.com', 'Self Administered'),
		('ashok.k@yahoo.com', '2020-12-21T09:23:00', 'Pfizer', 'SF Public Library', 'jimbo@gmail.com', NULL),
		('blee_dragon@gmail.com', '2020-12-21T09:24:00', 'Pfizer', 'SF Public Library', 'jimbo@gmail.com', NULL),
		('ashok.k@yahoo.com', '2021-01-19T11:44:00', 'Moderna', 'NE Market', 'saint_m@gmail.com', NULL),
		('wild_one99@yahoo.com', '2021-02-28T15:04:00', 'Moderna', 'NE Market', 'saint_m@gmail.com', 'Patient experienced dizziness and sent to Doctor Seuss'),
		('chen.lee233@icloud.com', '2021-02-28T16:22:00', 'Pfizer', 'NE Market', 'saint_m@gmail.com', NULL),
		('latisha88@gmail.com', '2021-05-29T12:50:00', 'Johnson and Johnson', 'SF Public Library', 'sveta123@hotmail.com', 'Patient complained about local pain'),
		('latisha88@gmail.com', '2021-11-05T16:33:00', 'Pfizer', 'Samaritan Center', 'sveta123@hotmail.com', NULL),
		('wild_one99@yahoo.com', '2021-12-14T13:09:00', 'Moderna', 'NE Market', 'sveta123@hotmail.com', NULL);
		
---------
-- EOF --
---------