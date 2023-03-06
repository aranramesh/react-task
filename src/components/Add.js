import React from 'react'
import '../components/add.css'
import Basic from './Table'

function Add() {
  return (
    <div>
       <div className='main'>
      <div className='container-fluid' style={{background:'#00004d'}}>
      <div className='heading container'>
        <h1>ABC School</h1>
        <i class='bx bxs-user'></i>     </div>

    </div>

    <div className='student-main'>
      <div className='student-one p-3'>
      <i class='bx bxs-user'></i> 
      <p style={{display:'inline'}}>student </p>
      </div>
      <div className='std-main'>
          <div className='std'>
           <h2 style={{color:'gray'}}>New Student Master</h2>
         
          </div>
          <Basic />         
     </div>
   
      
    </div>
    </div>
    </div>
  )
}

export default Add
