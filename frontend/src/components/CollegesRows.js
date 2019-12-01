import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CollegeRows extends React.Component {

    render() {
        return (

            <tr>
                <td>{this.props.collegeid}</td>
                <td>{this.props.collegename}</td>
                <td>{this.props.Deanfname}</td>
                <td>{this.props.Deanlname}</td>

            </tr>


        )
    }

}
