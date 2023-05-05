import React, { useState } from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { Link ,useNavigate } from 'react-router-dom';

import '../Css/card.css';
import Billingform from './Billingform';

function Cards({ dataset }) {
  const [data,setdata]=useState([])

  const navigate=useNavigate()
 
//-------------------------------------------------------------------
const getdata=(e)=>{
  try {
   
    console.log("test"+e.target.value)
    
    setdata(e.target.value)
    console.log("data"+data)
   

  navigate('/Billing')
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
            <Link to= '/Billing'  >
              <Button variant='primary'  onClick={getdata} value={dataset}>Buy Now</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Cards;
