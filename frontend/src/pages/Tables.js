import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import '../styles.css'

import BuildingsRows from '../components/BuildingsRows';
import ClassesRows from '../components/ClassesRows'
import CollegesRows from '../components/CollegesRows'
import GradesRows from '../components/GradesRows'
import StudentsRows from '../components/StudentsRows'
import TeachersRows from '../components/TeachersRows'

export default class Tables extends React.Component {

    state = {
        buildingsTable: [],
        classesTable: [],
        collegesTable: [],
        gradesTable: [],
        studentsTable: [],
        teachersTable: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/getbuildings')
            .then(res => {
                this.setState({
                    buildingsTable: res.data
                }, () => {
                    // console.log(this.state.buildingsTable);
                })
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:3001/getclasses')
            .then(res => {
                this.setState({
                    classesTable: res.data
                }, () => {
                    // console.log(this.state.classesTable);
                })
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:3001/getcolleges')
            .then(res => {
                this.setState({
                    collegesTable: res.data
                }, () => {
                    // console.log(this.state.collegesTable);
                })
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:3001/getgrades')
            .then(res => {
                this.setState({
                    gradesTable: res.data
                }, () => {
                    // console.log(this.state.gradesTable);
                })
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:3001/getstudents')
            .then(res => {
                this.setState({
                    studentsTable: res.data
                }, () => {
                    // console.log(this.state.studentsTable);
                })
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:3001/getteachers')
            .then(res => {
                this.setState({
                    teachersTable: res.data
                }, () => {
                    console.log(this.state.teachersTable);
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        const classesTable = this.state.classesTable.map((item, idx) =>
            (<ClassesRows key={idx} crn={item.crn} classid={item.classid} classname={item.classname} facultyid={item.facultyid} studentNo={item.studentNo} buildingid={item.buildingid} classroomNo={item.classroomNo} time={item.time} weekdays={item.weekdays} gradeID={item.gradeID} />)
        )

        const buildingsTable = this.state.buildingsTable.map((item, idx) =>
            (<BuildingsRows key={idx} buildingid={item.buildingid} Buildingname={item.Buildingname} classrooms={item.classrooms} department={item.department} />))

        const collegesTable = this.state.collegesTable.map((item, idx) => (
            <CollegesRows key={idx} collegeid={item.collegeid} collegename={item.collegename} Deanfname={item.Deanfname} Deanlname={item.Deanlname} />
        ))

        const gradesTable = this.state.gradesTable.map((item, idx) => (
            <GradesRows key={idx} gradeID={item.gradeID} classAvg={item.classAvg} Crn={item.Crn} collegeID={item.collegeID} Department={item.Department} FacultyID={item.FacultyID} />
        ))

        const studentsTable = this.state.studentsTable.map((item, idx) => (
            <StudentsRows key={idx} Studentid={item.Studentid} studentfname={item.studentfname} studentlname={item.studentlname} gpa={item.gpa} Department={item.Department} Classification={item.Classification} DOB={item.DOB} collegeid={item.collegeid} />
        ))

        const teachersTable = this.state.teachersTable.map((item, idx) => (
            <TeachersRows key={idx} FacultyID={item.FacultyID} teacherfname={item.teacherfname} teacherlname={item.teacherlname} DOB={item.DOB} salary={item.salary} department={item.department} education={item.education} collegeid={item.collegeid} />
        ))

        return (
            <div className="table-responsive">
                <Typography variant="h4" style={{ marginTop: 100 }}>
                    Database Tables:
                </Typography>

                <Typography color="secondary" variant="h5" style={{ marginTop: 20 }}>
                    Buildings Table
                </Typography>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">buildingid</th>
                            <th scope="col">buildingname</th>
                            <th scope="col">classrooms</th>
                            <th scope="col">department</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {buildingsTable}
                    </tbody>
                </table>

                <Typography color="secondary" variant="h5" style={{ marginTop: 100 }}>
                    Classes Table
                </Typography>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">crn</th>
                            <th scope="col">classid</th>
                            <th scope="col">classname</th>
                            <th scope="col">facultyid</th>
                            <th scope="col">studentno</th>
                            <th scope="col">buildingid</th>
                            <th scope="col">classroomNo</th>
                            <th scope="col">time</th>
                            <th scope="col">weekdays</th>
                            <th scope="col">gradeID</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {classesTable}
                    </tbody>
                </table>

                <Typography color="secondary" variant="h5" style={{ marginTop: 100 }}>
                    Colleges Table
                </Typography>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">collegeid</th>
                            <th scope="col">collegename</th>
                            <th scope="col">Deanfname</th>
                            <th scope="col">Deanlname</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {collegesTable}
                    </tbody>
                </table>

                <Typography color="secondary" variant="h5" style={{ marginTop: 100 }}>
                    Grades Table
                </Typography>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">gradeID</th>
                            <th scope="col">classAvg</th>
                            <th scope="col">Crn</th>
                            <th scope="col">collegeID</th>
                            <th scope="col">Department</th>
                            <th scope="col">FacultyID</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {gradesTable}
                    </tbody>
                </table>

                <Typography color="secondary" variant="h5" style={{ marginTop: 100 }}>
                    Students Table
                </Typography>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Studentid</th>
                            <th scope="col">studentfname</th>
                            <th scope="col">studentlname</th>
                            <th scope="col">gpa</th>
                            <th scope="col">Department</th>
                            <th scope="col">Classification</th>
                            <th scope="col">DOB</th>
                            <th scope="col">collegeid</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {studentsTable}
                    </tbody>
                </table>

                <Typography color="secondary" variant="h5" style={{ marginTop: 100 }}>
                    Teachers Table
                </Typography>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">FacultyID</th>
                            <th scope="col">teacherfname</th>
                            <th scope="col">teacherlname</th>
                            <th scope="col">DOB</th>
                            <th scope="col">salary</th>
                            <th scope="col">department</th>
                            <th scope="col">education</th>
                            <th scope="col">collegeid</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {teachersTable}
                    </tbody>
                </table>

            </div >
        )
    }
}