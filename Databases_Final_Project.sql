create database schoolDB;
use schooldb;

create table colleges (collegeid varchar(10) not null, 
collegename varchar(25) not null, Deanfname varchar(20) not null, 
Deanlname varchar(20) not null, primary key(collegeid));

create table Students(Studentid varchar(10) not null, studentfname varchar(15) not null, 
studentlname varchar(15) not null, gpa decimal(2,1) not null, 
Department varchar(30) not null, Classification varchar(30) not null, 
DOB date not null, collegeid varchar(10) not null, primary key (Studentid), 
foreign key(collegeid) references colleges (collegeid));

create table Buildings (buildingid varchar(5) not null, Buildingname varchar(25) not null, 
classrooms varchar(5) not null, department varchar(30) not null, primary key(buildingid));

create table teacher (FacultyID varchar(4) not null, teacherfname varchar(20) not null, 
teacherlname varchar(20) not null, DOB date not null, salary decimal(7,2)not null, 
department varchar(30) not null, education varchar(30)not null, collegeid varchar(10) not null, 
primary key(facultyid), foreign key(collegeid) references colleges (collegeid));

create table classes (crn varchar(10) , classid varchar(3) not null, classname varchar(30) not null, 
facultyid varchar(10) not null, studentNo varchar(15) not null, buildingid varchar(5) not null, 
classroomNo varchar(5) not null, time varchar(8) not null, weekdays varchar(5) not null, 
gradeID varchar(5) not null, primary key(crn), foreign key(facultyid) references teacher (facultyid));

create table grades (gradeID varchar(5) not null, classAvg decimal(3,1) not null, 
Crn varchar(5) not null, collegeID varchar(30) not null, Department varchar(30) not null, 
FacultyID varchar(5) not null, Primary key(gradeid), foreign key(crn) references classes (crn));
 
Insert into colleges values('360','Engineering','Pamela','Obiomon');
Insert into colleges values('270','Nursing','Owen','Castrophe');
Insert into colleges values('443','Mathematics','Bethany','Wilds');
Insert into colleges values('142','Business','Tiffani','Edwards');
Insert into colleges values('200','Criminal Justice','John','Turner');

Insert into Buildings values('28','S.R.Collins','42','Computer Science');
Insert into Buildings values('56','Justice League','87','Criminal Justice');
Insert into Buildings values('12','W.K.Lee','35','Accounting');
Insert into Buildings values('37','Bankroll','25','pediatric care');
Insert into Buildings values('44','Auburn','20','Elementary Education');

Insert into Students values('253615','John','Auburn','3.50','Criminal Justice','Sophomore','2001-01-04','200');
Insert into Students values('273919','Stephanie','Jackson','3.90','Criminal Justice','Senior','1997-02-09','200');
Insert into Students values('278993','Tyler','Johnson','2.20','Mechanical Engineering','Junior','1999-09-02','360');
Insert into Students values('209983','Zelena','Valentine','3.67','Computer Science','Junior','1999-04-30','360');
Insert into Students values('287797','Michael','Jordan','3.03','Pediatric care','Senior','1998-02-14','270');
Insert into Students values('256300','Jordan','Patrick','3.98','Pediatric care','Freshman','2002-01-04','270');
Insert into Students values('200090','Na Kaila','Sanderson','1.90','Pediatric care','Sophomore','2001-05-06','270');
Insert into Students values('267638','Sunny','Inglenton','2.03','Computer Science','Sophomore','2001-07-07','360');
Insert into Students  values ('264873' ,'Daloris', 'Stevens', '2.09', 'Accounting', 'Freshman', '2002-03-02', '142');
Insert into Students values ('257178','Chloe' ,'Hardwood' ,'3.02','Accounting' ,'Senior' ,'1998-08-29' ,'142');
Insert into Students values ('237898' ,'Katherine' ,'Wildings' ,'1.50' ,'Accounting' ,'Senior' ,'1998-08-13','142');
Insert into Students values ('255657' ,'Alioune' ,'Kareem' ,'2.10' ,'Elementary education' ,'Graduate' ,'1996-07-24','443');
Insert into Students values ('255551' ,'Keanu' ,'Babatunde' ,'2.01' ,'Elementary education' ,'Graduate' ,'1995-05-23','443');
Insert into Students values ('233231' ,'Christopher' ,'Hardings' ,'3.98' ,'Elementary education' ,'Sophomore' ,'2001-05-27','443');
Insert into Students values ('246874' ,'Shayla' ,'Johnson' ,'2.2' ,'Criminal Justice' ,'Freshman' ,'2002-11-30','200');
Insert into Students values ('234947' ,'Patrick' ,'Bookings' ,'2.67' ,'Computer Science' ,'Junior' ,'1998-10-02','200');
Insert into Students values ('273989' ,'Booker' ,'Julius' ,'1.23' ,'Computer Science' ,'Junior' ,'1998-12-12','360');
Insert into Students values ('264830' ,'Kaleb' ,'Carrington' ,'3.4' ,'Pediatric Care' ,'Graduate' ,'1996-12-26','270');
Insert into Students values ('222299' ,'Kristen' ,'Blew' ,'3.00' ,'Elementary Education' ,'Freshman' ,'2003-04-06','443');
Insert into Students values ('245678' ,'Christian' ,'Andrews' ,'3.78' ,'Criminal Justice' ,'Sophomore' ,'2000-05-14','200');

insert into teacher values('4002', 'Journey', 'Fields', '1986-09-20', '65000.00', 'Elementary Education', 'Masters', '443');
insert into teacher values('4019', 'Ahmed', 'Muhammad', '1991-04-23', '50000.00', 'Elementary Education', 'Bachelors', '443');
insert into teacher values('4025', 'James', 'Turner', '1967-05-07', '80000.00', 'Criminal Justice', 'Masters', '200');
insert into teacher values('4056', 'Lin', 'Ngyuwen', '1970-01-02', '85000.00', 'Compuetr Science', 'Masters', '360');
insert into teacher values('4100', 'Amanda', 'Lee', '1969-07-07', '95000.00', 'Criminal Justice', 'Ph.D', '200');
insert into teacher values('4145', 'Sophia', 'Sanders', '1966-04-04', '70000.00', 'Pediatric Care', 'Bachelors', '270');
insert into teacher values('4097', 'Chuck', 'Fey', '1960-08-14', '90000.00', 'Computer Science', 'Ph.D', '360');
insert into teacher values('4111', 'Tina', 'Slattery', '1969-02-17', '65000.00', 'Accounting', 'Bachelors', '142');
insert into teacher values('4122', 'Paul', 'Fortress', '1970-03-06', '90000.00', 'Pediatric Care', 'Ph.D', '270');
insert into teacher values('4099', 'Jazzmyn', 'Love', '1989-12-26', '80000.00', 'Accounting', 'Masters', '142');

insert into classes values ('93431', '112', 'Finite Math', '4111', '35', '12', '326', '11-12pm', 'MWF', '120');
insert into classes values ('34342', '345', 'Blood Work', '4122', '30', '37', '209', '9-10am', 'TH', '360');
insert into classes values ('67976', '444', 'Physical Education', '4002', '40', '44', '101', '11-1pm', 'MW', '430');
insert into classes values ('99980', '283', 'Web Design', '4056', '30', '28', '311', '2-3pm', 'T', '200');
insert into classes values ('46554', '267', 'App Development', '4097', '30', '28', '232', '4-5pm', 'TH', '290');
insert into classes values ('57425', '123', 'Marketing', '4099', '35', '12', '123', '8-10am', 'MWF', '130');
insert into classes values ('75257', '514', 'American Government', '4100', '35', '56', '145', '2-3pm', 'T', '540');
insert into classes values ('86325', '457', 'Primary Math', '4019', '40', '44', '277', '9-10am', 'MW', '450');
insert into classes values ('86348', '321', 'Ethics', '4145', '30', '37', '331', '9-10am', 'MWF', '330');
insert into classes values ('54368', '500', 'Politics', '4025', '35', '56', '132', '2-3pm', 'MWF', '550');

Insert into grades values ('120', '87.0', '93431', '142', 'Accounting', '4099');
Insert into grades values ('360', '70.0', '34342', '270', 'Pediatric care', '4145');
Insert into grades values ('430', '77.0', '67976', '443', 'Mathematics', '4019');
Insert into grades values ('200', '85.0', '99980', '360', 'Computer Science', '4056');
Insert into grades values ('290', '58.0', '46554', '360', 'Computer Science', '4097');
Insert into grades values ('130', '67.0', '57425', '142', 'Accounting', '4111');
Insert into grades values ('540', '88.0', '75257', '200', 'Criminal Justice', '4100');
Insert into grades values ('450', '90.0', '86325', '443', 'Mathematics', '4002');
Insert into grades values ('330', '76.0', '86348', '270', 'Pediatric Care', '4122');
Insert into grades values ('550', '82.0', '54368', '200', 'Criminal Justice', '4025');


/*alter table students add primary key(Studentid);
alter table buildings add primary key(buildingid); 
alter table classes add primary key(crn);
alter table teacher add primary key(Facultyid);
alter table grades add primary key(gradeid);*/

Alter table buildings modify buildingname varchar(25) not null;
Alter table buildings modify classrooms varchar(5) not null;
Alter table buildings modify department varchar(30) not null;

update grades set Facultyid = '4099' where gradeid = 120;
update grades set Facultyid = '4145' where gradeid = 360;
update grades set Facultyid = '4019' where gradeid = 430;
update grades set Facultyid = '4056' where gradeid = 200;
update grades set Facultyid = '4097' where gradeid = 290;
update grades set Facultyid = '4111' where gradeid = 130;
update grades set Facultyid = '4100' where gradeid = 540;
update grades set Facultyid = '4002' where gradeid = 450;
update grades set Facultyid = '4122' where gradeid = 330;
update grades set Facultyid = '4025' where gradeid = 550;

