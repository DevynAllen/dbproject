import React from 'react'
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import '../styles.css'

import QueryOneRows from '../components/QueryOneRows';
import QueryTwoRows from '../components/QueryTwoRows';
import QueryThreeRows from '../components/QueryThreeRows';
import QueryFourRows from '../components/QueryFourRows';
import QueryFiveRows from '../components/QueryFiveRows';


export default class Queries extends React.Component {
    state = {
        queryOneTable: [],
        queryTwoTable: [],
        queryThreeTable: [],
        queryFourTable: [],
        queryFiveTable: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/query1')
            .then(res => {
                this.setState({
                    queryOneTable: res.data
                }, () => {
                    // console.log(this.state.queryOneTable);
                })
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:3001/query2')
            .then(res => {
                this.setState({
                    queryTwoTable: res.data
                }, () => {
                    // console.log(this.state.queryTwoTable);
                })
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:3001/query3')
            .then(res => {
                this.setState({
                    queryThreeTable: res.data
                }, () => {
                    // console.log(this.state.queryThreeTable);
                })
            })
            .catch(err => console.log(err));

        axios.get('http://localhost:3001/query4')
            .then(res => {
                this.setState({
                    queryFourTable: res.data
                }, () => {
                    // console.log(this.state.queryFourTable);
                })
            })
            .catch(err => console.log(err));


        axios.get('http://localhost:3001/query5')
            .then(res => {
                this.setState({
                    queryFiveTable: res.data
                }, () => {
                    console.log(this.state.queryFiveTable);
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        const queryOneTable = this.state.queryOneTable.map((item, idx) =>
            (<QueryOneRows key={idx} teacherfname={item.teacherfname} teacherlname={item.teacherlname} />)
        )

        const queryTwoTable = this.state.queryTwoTable.map((item, idx) =>
            (<QueryTwoRows key={idx} Classification={item.Classification} DOB={item.DOB} Department={item.Department} Studentid={item.Studentid} collegeid={item.collegeid} gpa={item.gpa} studentfname={item.studentfname} studentlname={item.studentlname} />)
        )

        const queryThreeTable = this.state.queryThreeTable.map((item, idx) =>
            (<QueryThreeRows key={idx} gpa={item.gpa} studentfname={item.studentfname} studentlname={item.studentlname} />)
        )

        const queryFourTable = this.state.queryFourTable.map((item, idx) =>
            (<QueryFourRows key={idx} teacherfname={item.teacherfname} teacherlname={item.teacherlname} />)
        )

        const queryFiveTable = this.state.queryFiveTable.map((item, idx) =>
            (<QueryFiveRows key={idx} studentNo={item.studentNo} />)
        )

        return (

            <div className="table-responsive">
                <Typography variant="h4" style={{ marginTop: 100 }}>
                    Business Questions & Results:
                </Typography>

                <Typography color="secondary" variant="h6" style={{ marginTop: 30 }}>
                    1. "List the names of all Teachers who teach Classes with a class average higher than 80%"</Typography>
                <Typography variant="body1" color="primary">
                    "SELECT teacherfname, teacherlname FROM Teachers WHERE facultyid = SOME (SELECT Facultyid FROM Grades WHERE classavg  > 80)"
                </Typography>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">teacherfname</th>
                            <th scope="col">teacherlname</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {queryOneTable}
                    </tbody>
                </table>

                <Typography color="secondary" variant="h6" style={{ marginTop: 30 }}>
                    2. "List full details of students who attend a college where the dean's first name is Pamela"</Typography>
                <Typography variant="body1" color="primary">
                    "SELECT * from Students where collegeid in (SELECT collegeid from Colleges where Deanfname = 'Pamela')"
                </Typography>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Classification</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Department</th>
                            <th scope="col">Studentid</th>
                            <th scope="col">collegeid</th>
                            <th scope="col">gpa</th>
                            <th scope="col">studentfname</th>
                            <th scope="col">studentlname</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {queryTwoTable}
                    </tbody>
                </table>

                <Typography color="secondary" variant="h6" style={{ marginTop: 30 }}>
                    3. "List the names and gpa’s of all the Students in the College of Mathematics"</Typography>
                <Typography variant="body1" color="primary">
                    "SELECT studentfname, studentlname, gpa from Students WHERE collegeid = Any (SELECT collegeid from colleges WHERE collegename = 'Mathematics')"
                </Typography>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">gpa</th>
                            <th scope="col">studentfname</th>
                            <th scope="col">studentlname</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {queryThreeTable}
                    </tbody>
                </table>

                <Typography color="secondary" variant="h6" style={{ marginTop: 30 }}>
                    4. "Fname and lname of teachers that teach app development, or web design"</Typography>
                <Typography variant="body1" color="primary">
                    "SELECT teacherfname, teacherlname from Teachers WHERE facultyid in (SELECT facultyid from Classes WHERE classname = 'App Development' or classname = 'Web Design')"
                </Typography>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">teacherfname</th>
                            <th scope="col">teacherlname</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {queryFourTable}
                    </tbody>
                </table>

                <Typography color="secondary" variant="h6" style={{ marginTop: 30 }}>
                    5. "List the number of students in Chuck Fey’s class"
                </Typography>
                <Typography variant="body1" color="primary">
                    "SELECT studentNo from Classes WHERE facultyid in (SELECT facultyid from Teachers WHERE teacherfname = 'Chuck' and teacherlname ='Fey')"
                </Typography>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">studentNo</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {queryFiveTable}
                    </tbody>
                </table>

            </div>

        )
    }
}