import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './styles/home.css'
import ClassesRows from '../components/ClassesRows'

function createData(crn, calories, fat, carbs, protein) {
    return { crn, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default class Home extends React.Component {
    state = {
        classesTable: []
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

        //change li to <ClassesRows />

        const classesTable = this.state.classesTable.map((item, idx) =>
            (<ClassesRows key={idx} crn={item.crn} classname={item.classname} facultyid={item.facultyid} studentNo={item.studentNo} buildingid={item.buildingid} classroomNo={item.classroomNo} time={item.time} weekdays={item.weekdays} gradeID={item.gradeID} />)
        )

        //place {classesTable} below

        return (
            <div>
                <h1>DBMS Group Project</h1>

                <Paper className={'root'}>
                    <Table className={'table'} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">crn</TableCell>
                                <TableCell align="right">classid</TableCell>
                                <TableCell align="right">classname</TableCell>
                                <TableCell align="right">facultyid</TableCell>
                                <TableCell align="right">studentno</TableCell>
                                <TableCell align="right">buildingid</TableCell>
                                <TableCell align="right">classroomNo</TableCell>
                                <TableCell align="right">time</TableCell>
                                <TableCell align="right">weekdays</TableCell>
                                <TableCell align="right">gradeID</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* <h2>{classesTable}</h2> */}

                            {rows.map(row => (
                                <TableRow key={row.crn}>
                                    <TableCell component="th" scope="row">
                                        {row.crn}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>

            </div>
        )
    }
}