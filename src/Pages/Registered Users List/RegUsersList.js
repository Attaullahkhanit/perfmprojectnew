import React, {useEffect, useState} from 'react';
import Dashboard from '../Dashboard/Dashboard';
import './RegUsersList.css';
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
import {useSelector, useDispatch} from 'react-redux';
import { regUsersListAction } from '../../Redux/Actions/RegUsersListAction';

// import Paper from '@mui/material/Paper';



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
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yot', 'Frozen', 'Frozen@gmail.com', 23422124),
    createData('florence', 'gep', 'florence@gmail.com', 33434337),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
  ];
function RegUsersList() {
        const [firstName, setFirstName] = useState();
        const [lastName, setLastName] = useState();
        const [email, setEmail] = useState();
        const [phone, setPhone] = useState();

        const dispatchData = useDispatch();
        useEffect(()=> {
              dispatchData(regUsersListAction())
        }, [])
        const selectData = useSelector(state => state)
        console.log(selectData, 'redux Data')
        
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
                        <StyledTableCell value={firstName} onChange={(e) => setFirstName(e.target.value)}>First Name</StyledTableCell>
                        <StyledTableCell value={lastName} onChange={(e) => setLastName(e.target.value)}>Last Name</StyledTableCell>
                        <StyledTableCell value={email} onChange={(e) => setEmail(e.target.value)}>Email Id</StyledTableCell>
                        <StyledTableCell value={phone} onChange={(e) => setPhone(e.target.value)}>Phone No</StyledTableCell>
                        <StyledTableCell >Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                            {row.name}
                        </StyledTableCell>
                        <StyledTableCell >{row.calories}</StyledTableCell>
                        <StyledTableCell >{row.fat}</StyledTableCell>
                        <StyledTableCell >{row.carbs}</StyledTableCell>
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

export default RegUsersList
