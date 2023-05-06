import React from 'react'
import { useNavigate } from 'react-router-dom';
import Billingform from '../components/Billingform';

import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';



function Billing() {

  //-----------------------------------------------------------------
  let temp=0
  const location = useLocation();
    const searchParams = new URLSearchParams(location.search);   
   temp = searchParams.get('temp');
  //console.log("item id passed from cards"+temp);
  
  
  return (
    <div>
     <Billingform itid={temp}/>
    </div>
  )
}

export default Billing
