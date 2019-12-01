import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class StudentsRows extends React.Component {

    render() {
        return (

            <tr>
                <td>{this.props.Studentid}</td>
                <td>{this.props.studentfname}</td>
                <td>{this.props.studentlname}</td>
                <td>{this.props.gpa}</td>
                <td>{this.props.Department}</td>
                <td>{this.props.Classification}</td>
                <td>{this.props.DOB}</td>
                <td>{this.props.collegeid}</td>
            </tr>


        )
    }

}
