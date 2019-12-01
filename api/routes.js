const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'schoolDB'
});

//connect
db.connect((err) => {
    if (err) throw err;
    console.log('MySql connected...');
});

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

//CREATE schoolDB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE schoolDB'
    db.query(sql, (err, result) => {
        if (err) res.send(err);
        console.log(result)
        res.send('Database created...')
    })
})

//CREATE Colleges Table
app.get('/createcolleges', (req, res) => {
    let sql = 'create table Colleges (collegeid varchar(10) not null, collegename varchar(25) not null, Deanfname varchar(20) not null, Deanlname varchar(20) not null, primary key(collegeid))'
    db.query(sql, (err, result) => {
        if (err) res.send(err);
        console.log(result);
        res.send('Colleges Table Created...')
    })
})

//CREATE Students Table
app.get('/createstudents', (req, res) => {
    let sql = 'create table Students(Studentid varchar(10) not null, studentfname varchar(15) not null, studentlname varchar(15) not null, gpa decimal(2,1) not null, Department varchar(30) not null, Classification varchar(30) not null, DOB date not null, collegeid varchar(10) not null, primary key (studentid), foreign key(collegeid) references colleges (collegeid))'
    db.query(sql, (err, result) => {
        if (err) res.send(err);
        console.log(result);
        res.send('Students Table Created...')
    })
})

//CREATE Buildings Table
app.get('/createbuildings', (req, res) => {
    let sql = 'create table Buildings (buildingid varchar(5) not null, Buildingname varchar(25) not null, classrooms varchar(5) not null, department varchar(30) not null, primary key(buildingid))'
    db.query(sql, (err, result) => {
        if (err) res.send(err);
        console.log(result);
        res.send('Buildings Table Created...')
    })
})

//CREATE Teachers Table
app.get('/createteachers', (req, res) => {
    let sql = 'create table Teachers (FacultyID varchar(4) not null, teacherfname varchar(20) not null, teacherlname varchar(20) not null, DOB date not null, salary decimal(7,2)not null, department varchar(30) not null, education varchar(30)not null, collegeid varchar(10) not null, primary key(facultyid), foreign key(collegeid) references colleges (collegeid))'
    db.query(sql, (err, result) => {
        if (err) res.send(err);
        console.log(result);
        res.send('Teachers Table Created...')
    })
})

//CREATE Classes Table
app.get('/createclasses', (req, res) => {
    let sql = "create table Classes (crn varchar(10) not null, classid varchar(3) not null, classname varchar(30) not null, facultyid varchar(10) not null, studentNo varchar(15) not null, buildingid varchar(5) not null, classroomNo varchar(5) not null, time varchar(8) not null, weekdays varchar(5) not null, gradeID varchar(5) not null, primary key(crn), foreign key(facultyid) references teachers (facultyid))"
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Classes Table Created...')
    })
})

//CREATE Grades Table
app.get('/creategrades', (req, res) => {
    let sql = "create table Grades(gradeID varchar(5) not null, classAvg decimal(3,1) not null, Crn varchar(5) not null, collegeID varchar(30) not null, Department varchar(30) not null, FacultyID varchar(5) not null, Primary key(gradeid), foreign key(crn) references classes(crn))"
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Grades Table Created...')
    })
})

//INSERT data into colleges
app.get('/insertcolleges', function (req, res) {
    let collegedatas = [
        [360, 'Engineering', 'Pamela', 'Obiomon'],
        [270, 'Nursing', 'Owen', 'Castrophe'],
        [443, 'Mathematics', 'Bethany', 'Wilds'],
        [142, 'Business', 'Tiffani', 'Edwards'],
        [200, 'Criminal Justice', 'John', 'Turner']
    ];

    let sql = 'INSERT INTO Colleges (collegeid, collegename, Deanfname, Deanlname) VALUES ?';
    let query = db.query(sql, [collegedatas], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Colleges Table data added...')
    })
})

//INSERT data into buildings
app.get('/insertbuildings', function (req, res) {
    let buildingsdata = [
        [28, 'S.R. Collins', '42', 'Computer Science'],
        [56, 'Justice League', '87', 'Criminal Justice'],
        [12, 'W.K.Lee', '35', 'Accounting'],
        [37, 'Bankroll', '25', 'Pediatric Care'],
        [44, 'Auburn', '20', 'Elementary Education']
    ];

    let sql = 'INSERT INTO Buildings (buildingid, buildingname, classrooms, department) VALUES ?';
    let query = db.query(sql, [buildingsdata], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Buildings Table data added...')
    })
})

//INSERT data into students
app.get('/insertstudents', function (req, res) {
    let studentsdata = [
        ['287797', 'Michael', 'Jordan', '3.03', 'Pediatric Care', 'Senior', '1998-02-14', 270],
        ['256300', 'Jordan', 'Patrick', '3.98', 'Pediatric Care', 'Freshman', '2002-01-04', 270],
        ['20090', 'Na Kaila', 'Sanderson', '1.90', 'Pediatric Care', 'Sophomore', '2001-05-06', 270],
        ['267638', 'Sunny', 'Inglenton', '2.03', 'Computer Science', 'Sophomore', '2001-07-07', 360],
        ['264873', 'Daloris', 'Stevens', '2.09', 'Accounting', 'Freshman', '2002-03-02', 142],
        ['257178', 'Chloe', 'Hardwood', '3.02', 'Accounting', 'Senior', '1998-08-29', 142],
        ['237898', 'Katherine', 'Wildings', '1.50', 'Accounting', 'Senior', '1998-08-13', '142'],
        ['255657', 'Alioune', 'Kareem', '2.10', 'Elementary education', 'Graduate', '1996-07-24', '443'],
        ['255551', 'Keanu', 'Babatunde', '2.01', 'Elementary education', 'Graduate', '1995-05-23', '443'],
        ['233231', 'Christopher', 'Hardings', '3.98', 'Elementary education', 'Sophomore', '2001-05-27', '443'],
        ['246874', 'Shayla', 'Johnson', '2.2', 'Criminal Justice', 'Freshman', '2002-11-30', '200'],
        ['234947', 'Patrick', 'Bookings', '2.67', 'Computer Science', 'Junior', '1998-10-02', '200'],
        ['273989', 'Booker', 'Julius', '1.23', 'Computer Science', 'Junior', '1998-12-12', '360'],
        ['264830', 'Kaleb', 'Carrington', '3.4', 'Pediatric Care', 'Graduate', '1996-12-26', '270'],
        ['222299', 'Kristen', 'Blew', '3.00', 'Elementary Education', 'Freshman', '2003-04-06', '443'],
        ['245678', 'Christian', 'Andrews', '3.78', 'Criminal Justice', 'Sophomore', '2000-05-14', '200']

    ];

    let sql = 'INSERT INTO Students (studentid, studentfname, studentlname, gpa, department, classification, dob, collegeid) VALUES ?';
    let query = db.query(sql, [studentsdata], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Students Table data added...')
    })
})

//INSERT data into teachers
app.get('/insertteachers', function (req, res) {
    let teachersdata = [
        ['4002', 'Journey', 'Fields', '1986-09-20', '65000.00', 'Elementary Education', 'Masters', '443'],
        ['4019', 'Ahmed', 'Muhammad', '1991-04-23', '50000.00', 'Elementary Education', 'Bachelors', '443'],
        ['4025', 'James', 'Turner', '1967-05-07', '80000.00', 'Criminal Justice', 'Masters', '200'],
        ['4056', 'Lin', 'Ngyuwen', '1970-01-02', '85000.00', 'Compuetr Science', 'Masters', '360'],
        ['4100', 'Amanda', 'Lee', '1969-07-07', '95000.00', 'Criminal Justice', 'Ph.D', '200'],
        ['4145', 'Sophia', 'Sanders', '1966-04-04', '70000.00', 'Pediatric Care', 'Bachelors', '270'],
        ['4097', 'Chuck', 'Fey', '1960-08-14', '90000.00', 'Computer Science', 'Ph.D', '360'],
        ['4111', 'Tina', 'Slattery', '1969-02-17', '65000.00', 'Accounting', 'Bachelors', '142'],
        ['4122', 'Paul', 'Fortress', '1970-03-06', '90000.00', 'Pediatric Care', 'Ph.D', '270'],
        ['4099', 'Jazzmyn', 'Love', '1989-12-26', '80000.00', 'Accounting', 'Masters', '142']
    ];

    let sql = 'INSERT INTO Teachers (facultyid, teacherfname, teacherlname, dob, salary, department, education, collegeid) VALUES ?';
    let query = db.query(sql, [teachersdata], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Teachers Table data added...')
    })
})

//INSERT data into classes
app.get('/insertclasses', function (req, res) {
    let classesdata = [
        ['93431', '112', 'Finite Math', '4111', '35', '12', '326', '11-12pm', 'MWF', '120'],
        ['34342', '345', 'Blood Work', '4122', '30', '37', '209', '9-10am', 'TH', '360'],
        ['67976', '444', 'Physical Education', '4002', '40', '44', '101', '11-1pm', 'MW', '430'],
        ['99980', '283', 'Web Design', '4056', '30', '28', '311', '2-3pm', 'T', '200'],
        ['46554', '267', 'App Development', '4097', '30', '28', '232', '4-5pm', 'TH', '290'],
        ['57425', '123', 'Marketing', '4099', '35', '12', '123', '8-10am', 'MWF', '130'],
        ['75257', '514', 'American Government', '4100', '35', '56', '145', '2-3pm', 'T', '540'],
        ['86325', '457', 'Primary Math', '4019', '40', '44', '277', '9-10am', 'MW', '450'],
        ['86348', '321', 'Ethics', '4145', '30', '37', '331', '9-10am', 'MWF', '330'],
        ['54368', '500', 'Politics', '4025', '35', '56', '132', '2-3pm', 'MWF', '550']
    ];

    let sql = 'INSERT INTO Classes (crn, classid, classname, facultyid, studentno, buildingid, classroomno, time, weekdays, gradeid) VALUES ?';
    let query = db.query(sql, [classesdata], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Classes Table data added...')
    })
})

//INSERT data into Grades
app.get('/insertgrades', function (req, res) {
    let gradesdata = [
        ['120', '87.0', '93431', '142', 'Accounting', '4099'],
        ['360', '70.0', '34342', '270', 'Pediatric care', '4145'],
        ['430', '77.0', '67976', '443', 'Mathematics', '4019'],
        ['200', '85.0', '99980', '360', 'Computer Science', '4056'],
        ['290', '58.0', '46554', '360', 'Computer Science', '4097'],
        ['130', '67.0', '57425', '142', 'Accounting', '4111'],
        ['540', '88.0', '75257', '200', 'Criminal Justice', '4100'],
        ['450', '90.0', '86325', '443', 'Mathematics', '4002'],
        ['330', '76.0', '86348', '270', 'Pediatric Care', '4122'],
        ['550', '82.0', '54368', '200', 'Criminal Justice', '4025']
    ];

    let sql = 'INSERT INTO Grades (gradeid, classavg, crn, collegeid, department, facultyid) VALUES ?';
    let query = db.query(sql, [gradesdata], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Grades Table data added...')
    })
})

// Select classes
app.get('/getclasses', function (req, res) {
    let sql = 'SELECT * FROM classes';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results)
    })
})

app.listen('3001', () => {
    console.log('Server started on port 3001');
})