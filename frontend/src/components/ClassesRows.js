import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default class ClassesRows extends React.Component {

    render() {

        return (
            <div>
                <TableCell component="th" scope="row">
                    {this.props.crn}
                </TableCell>
                <TableCell component="th" scope="row">
                    {this.props.crn}
                </TableCell>
            </div>

        )
    }

}
