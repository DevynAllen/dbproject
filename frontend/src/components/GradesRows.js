import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class GradesRows extends React.Component {

    render() {
        return (

            <tr>
                <td>{this.props.gradeID}</td>
                <td>{this.props.classAvg}</td>
                <td>{this.props.Crn}</td>
                <td>{this.props.collegeID}</td>
                <td>{this.props.Department}</td>
                <td>{this.props.FacultyID}</td>
            </tr>


        )
    }

}
