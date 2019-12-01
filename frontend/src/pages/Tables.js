import React from 'react';
import axios from 'axios';
import ClassesRows from '../components/ClassesRows'
import Typography from '@material-ui/core/Typography';
import '../styles.css'

export default class Tables extends React.Component {

    state = {
        classesTable: [],
        buildingsTable: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/getclasses')
            .then(res => {
                this.setState({
                    classesTable: res.data
                }, () => {
                    console.log(this.state.classesTable);
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        const classesTable = this.state.classesTable.map((item, idx) =>
            (<ClassesRows key={idx} crn={item.crn} classid={item.classid} classname={item.classname} facultyid={item.facultyid} studentNo={item.studentNo} buildingid={item.buildingid} classroomNo={item.classroomNo} time={item.time} weekdays={item.weekdays} gradeID={item.gradeID} />)
        )

        return (
            <div className="table-responsive">
                <Typography variant="h5" style={{ marginTop: 100 }}>
                    Classes
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

            </div >
        )
    }
}