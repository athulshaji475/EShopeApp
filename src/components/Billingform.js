import React, { useEffect, useState } from 'react'
import {Card, CardGroup, Button, useAccordionButton} from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../Css/card.css';
import Navbr from './Navbr';
import axios from 'axios';
import { StrictMode } from 'react';

function Billingform({itid}) {
  console.log("data from billingform"+itid)
  const [data,setdata]=useState([])
  const [name,setname]=useState('')
  const [address,setaddress]=useState('')
  const [phone,setphone]=useState('')
  const [tid,settid]=useState('')
const [def,setdef]=useState('')
const [price,setprice]=useState(0)


//-------------------------------------------------------------------
useEffect(()=>{
  try {
    axios.get('http://localhost:58035/api/Users')
 .then((response)=>{
  console.log(response.data)
  setdata(response.data)
  const item = response.data.find((d) => d.id == itid);
      if (item) {
        setdef(item.name)
        setprice(item.price)
        
      } else {
        console.log(`Item with id ${itid} not found.`);
      }
  
 },(error)=>{
  console.log(error)

 })
  } catch (error) {
    console.log(error)
  }
 
},[])



  
const Loaddata=(e)=>{
  
}



//--------------------------------------------------------------------
const handleSelect=(event)=>{
  //console.log(event.target.value)
  settid(event.target.value)
   }
  
      const BillItem=(e)=>{
        try {
          e.preventDefault();
          const dataset={tid,name,address,phone,}
          console.log(dataset)
          axios.post('http://localhost:58035/api/Purchase',dataset)
          .then((response)=>{
  if (response.data)
  {
  alert("Purchase done suscessfully....")
  }
          })
        } catch (error) {
          
        }
       
       // console.log(name)
    }

//------------------------------------------------------------
  return (
    <div>
    <Navbr/>
      <CardGroup style={{width:'auto'}}>
           
           <Card className={"card-grid"}>
               <Card.Img className={"card-img"}  variant="bottom" src={"https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR61F36y-FxJ1SuhuKrBUmJeQtWyklBOtf_QcqLNnziuboOyVCBPXjSiJsNqIQ_AIvd"}/>
               <Card.Body>
               
                

               
               <select onChange={handleSelect}  class="dropdown" style={{width:"200px",fontSize:"30px",borderBlockStyle:'none'}}>
              <option value=''>{def}</option>
              {data.map((d) => (
               
                <option  key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
              </select>
              
          
               <br></br>
                   <Card.Title><strong><h3 style={{color:'red'}}>Price:{price}</h3></strong></Card.Title>
                   <Card.Text>
                     <input type='Text' 
                     class="form-control" 
                      placeholder='Name'
                      value={name}
                      onChange={((e)=>setname(e.target.value))}></input>
                    
                   </Card.Text>
                   <Card.Text>
                  
                   </Card.Text>
                   <Card.Text>
                   <input 
                    class="form-control" 
                     type='Text' 
                     placeholder='Phone'
                     value={phone}
                      onChange={((e)=>setphone(e.target.value))}
                     
                     ></input>
                     
                   </Card.Text>
                   
                   <Card.Text>
                   <input 
                    class="form-control" 
                     type='Text' 
                     placeholder='Address'
                     value={address}
                      onChange={((e)=>{setaddress(e.target.value)})}
                    ></input>
                     
                   </Card.Text>
                   
                  
                   <Button variant="primary"
                           href="www.google.com"
                           rel={"noopener noreferrer"}
                           className='btn btn-success'
                           onClick={BillItem}
                           >
                       By Now
                   </Button>
                  
               </Card.Body>
           </Card>
   
</CardGroup>
</div>

    
  )
}

export default Billingform
