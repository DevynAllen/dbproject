import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ClassesRows extends React.Component {

    render() {
        return (

            <tr>
                <td>{this.props.crn}</td>
                <td>{this.props.classid}</td>
                <td>{this.props.classname}</td>
                <td>{this.props.facultyid}</td>
                <td>{this.props.studentNo}</td>
                <td>{this.props.buildingid}</td>
                <td>{this.props.classroomNo}</td>
                <td>{this.props.time}</td>
                <td>{this.props.weekdays}</td>
                <td>{this.props.gradeID}</td>
            </tr>


        )
    }

}
