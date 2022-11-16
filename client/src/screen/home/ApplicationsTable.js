import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useNavigate} from "react-router-dom";


export const ApplicationsTable = (props) => {
    const {data} = props;
    const navigate = useNavigate();
    const handleRowClick = (data) => {
        navigate('/details', {state: {data}});
    }
    if(!data){
        return <div>loading</div>;
    }

    return (
        <TableContainer
            component={Paper}
        >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Application ID</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((app) => (
                        <TableRow
                            key={app.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            onClick={() => handleRowClick(app)}
                        >
                            <TableCell component="th" scope="row">
                                {app.id}
                            </TableCell>
                            <TableCell align="right">{app.firstName}</TableCell>
                            <TableCell align="right">{app.lastName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
