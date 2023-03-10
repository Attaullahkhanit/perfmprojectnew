import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './ReceivedOrdersList.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Btnuser from '../../Component/Btnuser';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#001529',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(fname, lname, pname, price, status, address, pnumber) {
  return { fname, lname, pname, price, status, address, pnumber};
}

const rows = [
  createData('Frozen yot', 'Frozen', 'Do It', 2344, "Pending", "city, twonship, irland", 98434343),
  createData('Oedipus', 'gep', 'Oedipus', 4337, "Recieved", "vally road, texas", 48343232),
  createData('edge', 'jason', 'Meringue', 262, 'Recived', 'street no.32, micky italy',3434324),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];


function ReceivedOrdersList() {
  return (
    <>
        <Dashboard>
        <div className='regUL-title'>
                <div><h6>Register Users List</h6></div>
                <div><Btnuser name="Add User"/></div>
            </div>
            <TableContainer className='tablecontainer' >
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell> First Name</StyledTableCell>
                        <StyledTableCell >Last Name</StyledTableCell>
                        <StyledTableCell >Perfume Name</StyledTableCell>
                        <StyledTableCell >Price</StyledTableCell>
                        <StyledTableCell >Status</StyledTableCell>
                        <StyledTableCell >Delivery Address</StyledTableCell>
                        <StyledTableCell >Phone No</StyledTableCell>
                        <StyledTableCell >Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.fname}>
                        <StyledTableCell component="th" scope="row">
                            {row.fname}
                        </StyledTableCell>
                        <StyledTableCell >{row.lname}</StyledTableCell>
                        <StyledTableCell >{row.pname}</StyledTableCell>
                        <StyledTableCell >{row.price}</StyledTableCell>
                        <StyledTableCell >{row.status}</StyledTableCell>
                        <StyledTableCell >{row.address}</StyledTableCell>
                        <StyledTableCell >{row.pnumber}</StyledTableCell>
                        <StyledTableCell > <Stack direction="row" spacing={1}>
                                                <IconButton aria-label="delete">
                                                   <DeleteIcon />
                                                </IconButton>
                                                <IconButton color="primary" aria-label="add to shopping cart">
                                                   <AddShoppingCartIcon />
                                                </IconButton>
                                            </Stack>
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Dashboard>
    </>
  )
}

export default ReceivedOrdersList
