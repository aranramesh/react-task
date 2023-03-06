import React from 'react'
import '../components/first.css'
import { Button } from '@mui/material'
import BasicTable from './Second'
import { createSearchParams, useNavigate } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';


function First() {

  const Navigate = useNavigate()
 const aDD = ()=>{
  Navigate('/Add')
 }
 const Change = (e)=>{
   Navigate({
    pathname:"/",
    search:createSearchParams({
      val:e.target.value
    }).toString()
   })
 }
  return (
    <div>
    <div className='main'>
      <div className='container-fluid' style={{background:'#00004d'}}>
      <div className='heading container'>
        <h1>ABC School</h1>
        <i class='bx bxs-user'></i>
        </div>

    </div>

    <div className='student-main'>
      <div className='student-one p-3'>
      <i class='bx bxs-user'></i> 
      <p style={{display:'inline'}}>student </p>
      </div>
      <div className='std-main'>
          <div className='std'>
           <h2 style={{color:'gray'}}>Student Master</h2>
           <div className='vsr' style={{border:"solid 1px gray"}}>
            <input placeholder='Search' style={{border:"none",paddingLeft:"10px"}} onChange={Change}></input>
          <span>  <i class='bx bx-search-alt-2'></i>
</span>
                     </div>
           <Button sx={{width:100}} style={{display:'inline'}} variant="contained" onClick={()=>aDD()}>ADD</Button>
          </div>
          <BasicTable/>
      </div>
      
      
    </div>
    </div>
    </div>
  )
}

export default First
