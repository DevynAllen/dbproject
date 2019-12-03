use schooldb;

SELECT teacherfname, teacherlname FROM teacher 
WHERE facultyid = SOME (SELECT Facultyid FROM grades WHERE classavg  > 80);

Select * from students where collegeid in (select collegeid from colleges where Deanfname = 'Pamela');

Select studentfname, studentlname, gpa from students 
where collegeid = Any (select collegeid from colleges where collegename = 'Mathematics');

select teacherfname, teacherlname from teacher where facultyid in (select facultyid 
from grades where classAvg in (select Max(classAvg) from grades)); 

select teacherfname, teacherlname from teacher 
where facultyid in (select facultyid from grades where classAvg < 60);

select teacherfname, teacherlname from teacher where facultyid in (select facultyid 
from classes where classname = 'App Development' or classname = 'Web Design');

Select studentid, gpa from students 
where collegeid in (select collegeid from colleges where Deanfname = 'Tiffani');

Select studentid, gpa from students 
where collegeid in (select collegeid from colleges where Deanfname = 'Tiffani'); 

select count(*) as classestaught from classes 
where buildingid in (select buildingid from buildings where Buildingname = 'S.R.Collins');

select facultyid, classavg from grades where 
collegeid in (select collegeid from colleges where collegename = 'Nursing');

