import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Context } from '../Context';
import { useContext } from 'react';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { ListItemSecondaryAction } from '@mui/material';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
const rows=[{name:"1",age:"23",sname:"ramesh",fname:'subramani',num:'1928913774',classes:'12',},
{name:"2",age:"23",sname:"ramesh",fname:'subramani',num:'1928913774',classes:'12',},]

export default function BasicTable() {
  const [search,setSearch] = React.useState('')
  const {state,dispatch} = useContext(Context);
  const Navigate = useNavigate()
 const eDit =(i)=>{
    console.log(i);
   Navigate({
    pathname:'/Add',
    search:createSearchParams({
      id:i
    }).toString()
   })
  }
  //  const Clone = state.addValue && state.addValue.map(())
  const [param]=useSearchParams();
let string =""
  const what = param.get("val") &&  setSearch(param.get("val"))
   
  console.log(search)
 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S no</TableCell>
            <TableCell align="right">S code</TableCell>
            <TableCell align="right">Student Name</TableCell>
            <TableCell align="right">Father name</TableCell>
            <TableCell align="right">Mobile NO</TableCell>
            <TableCell align="right">Class</TableCell>
             <TableCell align="right">Edit</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {state.addValue&&state.addValue.map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.code}
              </TableCell>
              <TableCell align="right">{row.code}</TableCell>
              <TableCell align="right">{row.studentname}</TableCell>
              <TableCell align="right">{row.fathername}</TableCell>
              {/* <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.village}</TableCell> */}
              {/* <TableCell align="right">{row.Dis}</TableCell>
              <TableCell align="right">{row.pin}</TableCell> */}
              <TableCell align="right">{row.num}</TableCell>
              <TableCell align="right">{row.section}</TableCell>
       
              <TableCell align="right"><button key={i} onClick={()=>eDit(i)}>Edit</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}