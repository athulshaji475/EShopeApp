import React, { useState } from 'react'
import '../App.css'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
} from 'mdb-react-ui-kit'
import Navbr from '../components/Navbr'
import { Navigate,useNavigate } from 'react-router-dom'
function Login() {
const navigate=useNavigate()
    const [email,setemail]=useState('')
    const [password,setpassw]=useState('')

const data={}
   const CheckData=()=>{
data.email=email
data.password=password
if(data.email==='admin123@gmail.com' && data.password==='admin123@')
{
  navigate('/home')
}
else
{
    alert("Invalid credentials..!")
}
   }



  return (
   <>
  
    <MDBContainer className="my-5">

<MDBCard>
  <MDBRow className='g-0'>

    <MDBCol md='6'>
      <MDBCardImage src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt="login form" className='rounded-start w-100' style={{height:'100%'}}/>
    </MDBCol>

    <MDBCol md='6'>
      <MDBCardBody className='d-flex flex-column'>

        <div className='d-flex flex-row mt-2'>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
          
        </div>

        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

          <MDBInput 
          wrapperClass='mb-4' 
          label='Email address'
           id='formControlLg' 
           type='email' 
           size="lg"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
           />
          <MDBInput 
          wrapperClass='mb-4' 
          label='Password' 
          id='formControlLg' 
          type='password'
           size="lg"
            value={password}
            onChange={(e)=>setpassw(e.target.value)}
           />

        <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={CheckData}>Login</MDBBtn>
        <a className="small text-muted" href="#!">Forgot password?</a>
        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>

        <div className='d-flex flex-row justify-content-start'>
          <a href="#!" className="small text-muted me-1">Terms of use.</a>
          <a href="#!" className="small text-muted">Privacy policy</a>
        </div>

      </MDBCardBody>
    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer>
   </>
  )
}

export default Login
