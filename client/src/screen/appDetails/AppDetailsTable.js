import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const transTypeMap = {
    1: 'AUTH',
    2: 'COMMIT',
    3: 'REFUND',
}

export const ApplicationsTable = (props) => {
    const {data} = props;


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
                        <TableCell>cardNo.</TableCell>
                        <TableCell align="right">Issuer</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">transType</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((curr) => (
                        <TableRow
                            key={curr.cardNo}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {curr.cardNo}
                            </TableCell>
                            <TableCell align="right">{curr.issuer}</TableCell>
                            <TableCell align="right">{curr.amount}</TableCell>
                            <TableCell align="right">{transTypeMap[curr.transType]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
