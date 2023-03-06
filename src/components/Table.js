import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
 import { useNavigate } from 'react-router-dom';
import { Context } from '../Context';
import { useContext } from 'react';
import { TextField, MenuItem, Select, Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom';


export default function Basic() {
  const {state,dispatch} = useContext(Context);
  const [param] = useSearchParams()
  const codeIndex = param.get("id") && state.addValue[parseInt(param.get("id"))]

  const Navigate = useNavigate()
  const [code, setCode] = React.useState(param.get("id")?codeIndex.code:"");
  const [studentname ,setName] =React.useState(param.get("id")?codeIndex.studentname:"");
  const [fathername ,setFName] =React.useState(param.get("id")?codeIndex.fathername:"");
  // const [address , setAddress] =React.useState(param.get("id")?codeIndex.address:"");
  // const [village , setVillage] =React.useState(param.get("id")?codeIndex.village:"");
  // const [Dis , setDis] =React.useState(param.get("id")?codeIndex.Dis:"");
  // const [pin , setPin] =React.useState(param.get("id")?codeIndex.pin:"");
    const [num , setNum] =React.useState(param.get("id")?codeIndex.num:"");
    const [section , setSection] =React.useState(param.get("id")?codeIndex.section:"");

    // const [num , setNum] =React.useState(param.get("id")?codeIndex.num:"");
    // const [Select,setSelect]=React.useState();
 
  
  const savE = ()=>{
    if(param.get("id")){
      state.addValue[parseInt(param.get("id"))].code = code
      state.addValue[parseInt(param.get("id"))].studentname = studentname
      state.addValue[parseInt(param.get("id"))].fathername = fathername
      // state.addValue[parseInt(param.get("id"))].address = address
      // state.addValue[parseInt(param.get("id"))].village = village
      // state.addValue[parseInt(param.get("id"))].Dis = Dis
      // state.addValue[parseInt(param.get("id"))].pin = pin
      state.addValue[parseInt(param.get("id"))].num = num
      state.addValue[parseInt(param.get("id"))].section = section


    }else{
      const addV = {
        code:code,
        studentname:studentname,
        fathername:fathername,
        num:num,
        section:section

      }
      dispatch({type:"Ramesh",payload:[...state.addValue,addV]})
    }
     
      
      
       Navigate('/')
        }

  // console.log(code);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>

            <TableCell>Student Code</TableCell>
            <TableCell><TextField id="outlined-basic" label="Enter a Value" variant="outlined" value={code} onChange={(e) => setCode(e.target.value)} /></TableCell>
          </TableRow>
          <TableRow>

            <TableCell>Student Name</TableCell>
            <TableCell><TextField id="outlined-basic" label="Student Name" variant="outlined" value={studentname} onChange={(e) => setName(e.target.value)} /></TableCell>
          </TableRow>
          <TableRow>

            <TableCell>Father Name</TableCell>
            <TableCell><TextField id="outlined-basic" label="Father Name" variant="outlined" value={fathername} onChange={(e) =>setFName(e.target.value)} /></TableCell>
          </TableRow>
      

          <TableRow>
            <TableCell>Phone No</TableCell>
            <TableCell><TextField id="outlined-basic" label="Phone NO" variant="outlined" value={num} onChange={(e) =>setNum(e.target.value)} /></TableCell>
          </TableRow>
    
          <TableRow>
            <TableCell>Class</TableCell>
            <TableCell><TextField id="outlined-basic" label="Class" variant="outlined" value={section} onChange={(e) =>setSection(e.target.value)} />
            </TableCell>
          </TableRow>
    
        



          {/* <TableRow>
            <TableCell>Class</TableCell>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            // value={Select}
            // onChange={(e) => setSelect(e.target.value)}
           
            >
              <MenuItem value={10}>6</MenuItem>
              <MenuItem value={20}>7</MenuItem>
              <MenuItem value={30}>8</MenuItem>
              <MenuItem value={10}>9</MenuItem>
              <MenuItem value={20}>10</MenuItem>
              <MenuItem value={30}>11</MenuItem>
              <MenuItem value={30}>12</MenuItem>
            </Select>
          </TableRow> */}

          <TableRow>
            <TableCell>Date Of Birth</TableCell>
            <input type="date"></input>
          </TableRow>

          <TableRow>
            <Button sx={{ margin: '10px' }} variant="contained" onClick={()=>savE()}>Save</Button>
            <Button sx={{ margin: '10px' }} variant="contained">Cancel</Button>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
