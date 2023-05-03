import React from 'react'
import { useNavigate } from 'react-router-dom';

function Billing() {
    const myStyle = {
        backgroundColor: 'green',
        color: 'white',
        fontSize: '20px',
        padding: '10px',
        borderRadius: '5px',
      };
  let  nav=useNavigate()
    setTimeout(() => {
        nav('/items')
    },300);
  return (
    <div style={myStyle} >
      <h4 >Your Order Placed Successfully........!</h4>
    </div>
  )
}

export default Billing
