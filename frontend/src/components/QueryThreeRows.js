import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class QueryThreeRows extends React.Component {

    render() {
        return (

            <tr>
                <td>{this.props.gpa}</td>
                <td>{this.props.studentfname}</td>
                <td>{this.props.studentlname}</td>
            </tr>

        )
    }

}
