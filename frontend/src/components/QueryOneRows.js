import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class QueryOneRows extends React.Component {

    render() {
        return (

            <tr>
                <td>{this.props.teacherfname}</td>
                <td>{this.props.teacherlname}</td>
            </tr>

        )
    }

}
