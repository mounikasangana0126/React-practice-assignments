import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

function ApplicationForm() {
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [mobile,setMobile]=useState("")
    const [email,setEmail]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('/applicationform',{firstname,lastname,mobile,email})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
    }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-black" style={{minHeight:'100vh'}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname" className='form-label text-white'>First Name:</label>
          <input type="text" className="form-control " id="firstname" autoComplete='off'  name="firstname" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/>
        </div>
        <div className="form-group">
          <label htmlFor="lastname" className='form-label text-white'>Last Name:</label>
          <input type="text" className="form-control" id="lastname"  autoComplete='off' name="lastname" value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/>
        </div>
        <div className="form-group">
          <label htmlFor="mobile" className='form-label text-white'>Mobile Number:</label>
          <input type="text" className="form-control" id="mobile"  autoComplete='off' name="mobile"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
        </div>
        <div className="form-group">
          <label htmlFor="email" className='form-label text-white'>Email Id:</label>
          <input type="text" className="form-control" id="email"  autoComplete='off' name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}

export default ApplicationForm;
