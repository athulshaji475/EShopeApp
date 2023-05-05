import React, { useEffect, useState } from 'react'
import {Card, CardGroup, Button, useAccordionButton} from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../Css/card.css';
import Navbr from './Navbr';
import axios from 'axios';

function Billingform() {
  const [data,setdata]=useState([])
  const [name,setname]=useState('')
  const [address,setaddress]=useState('')
  const [phone,setphone]=useState('')
  const [tid,settid]=useState('')




//-------------------------------------------------------------------
useEffect(()=>{
  try {
    axios.get('http://localhost:58035/api/Users')
 .then((response)=>{
  console.log(response.data)
  setdata(response.data)
  
 },(error)=>{
  console.log(error)

 })
  } catch (error) {
    console.log(error)
  }
 
 

},[])


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
               
                

               
               <select onChange={handleSelect}>
              <option value=''>Select an item</option>
              {data.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
              </select>
              
          
               
                   <Card.Title><strong></strong></Card.Title>
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
