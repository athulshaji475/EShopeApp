import React from 'react'
import { useNavigate } from 'react-router-dom';
import Billingform from '../components/Billingform';
import { useLocation } from 'react-router-dom';
function Billing() {
  try {
    const location = useLocation();
  const { data } = location.state;
  
  console.log(data);
  } catch (error) {
    console.log(error)
  }
  
    const myStyle = {
        backgroundColor: 'green',
        color: 'white',
        fontSize: '20px',
        padding: '10px',
        borderRadius: '5px',
      };
  let  nav=useNavigate()
   nav('/Billing')
  return (
    <div>
     <Billingform/>
    </div>
  )
}

export default Billing
