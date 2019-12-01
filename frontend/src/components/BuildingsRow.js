import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class BuildingsRows extends React.Component {

    render() {
        return (

            <tr>
                <td>{this.props.buildingid}</td>
                <td>{this.props.Buildingname}</td>
                <td>{this.props.classrooms}</td>
                <td>{this.props.department}</td>

            </tr>


        )
    }

}
