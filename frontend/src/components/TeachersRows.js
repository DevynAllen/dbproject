import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TeachersRows extends React.Component {

    render() {
        return (

            <tr>
                <td>{this.props.FacultyID}</td>
                <td>{this.props.teacherfname}</td>
                <td>{this.props.teacherlname}</td>
                <td>{this.props.DOB}</td>
                <td>{this.props.salary}</td>
                <td>{this.props.department}</td>
                <td>{this.props.education}</td>
                <td>{this.props.collegeid}</td>
            </tr>


        )
    }

}
