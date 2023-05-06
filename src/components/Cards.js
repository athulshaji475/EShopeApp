import React, { useState } from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { Link ,useNavigate } from 'react-router-dom';

import '../Css/card.css';
import Billingform from './Billingform';
import Billing from '../Pages/Billing';

function Cards({ dataset }) {
 
  //const [data,setdata]=useState(0)
  const navigate=useNavigate()
  
//-------------------------------------------------------------------
const getdata=(e)=>{
  try {
   
    console.log("test"+e.target.value)
     const temp=e.target.value
   // setdata(temp)
   //alert(temp)
    console.log("temp"+temp)
    //console.log("data"+data)
    

    navigate(`/Billing?temp=${temp}`);
  } catch (error) {
    console.log(error)
  }
 
}
//-----------------------------------------------------------------






  
  console.log(dataset)
  return (
    <div>
      <CardGroup style={{ width: 'auto' }}>
        <Card className={'card-grid'}>
          <Card.Img
            className={'card-img'}
            variant='bottom'
            src={'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR61F36y-FxJ1SuhuKrBUmJeQtWyklBOtf_QcqLNnziuboOyVCBPXjSiJsNqIQ_AIvd'}
          />
          <Card.Body>
            <Card.Title>
              <strong>{dataset.name}</strong>
            </Card.Title>
            <Card.Text>
              {dataset.price}
              <br />
              {dataset.catogory}
            </Card.Text>
            
              <Button variant='primary'  onClick={getdata} value={dataset.id}>Buy Now</Button>
            
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Cards;
