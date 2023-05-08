import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Navbr from '../components/Navbr'
import { FormCheck } from 'react-bootstrap'
function PurchaseReport() {
//----------------------------------------------------------------------
const [items,setitems]=useState([])



useEffect(() => {
  axios.get('http://localhost:58035/api/Purchase')
  .then((response)=>{
   // console.log(response.data)
 setitems(response.data)
//console.log(items)
    
  },(Error)=>{
    console.log(Error)
  })
},[])

//-------------refresh--------------------------------------------------------------
const refresh =()=>{
  
  axios.get('http://localhost:58035/api/Purchase')
  .then((response)=>{
   // console.log(response.data)
 setitems(response.data)
//console.log(items)
    
  },(Error)=>{
    console.log(Error)
  })

}
//---------------------------------------------------------------------------------------

const Deletitem=(e)=>{
  
  let id=e.target.value

axios.get('http://localhost:58035/api/Purchase?id='+id)
.then((resopnse)=>{
  console.log(resopnse)
 refresh()
})
}

//------------------------------------------------------------------------
  return (
    
    <div>
    <Navbr/>
      <div>
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">PartyName</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody >
  {
    items.map((d)=>{
    return <tr key={d.id} >
   
      <td>{d.id}</td>
      <td>{d.partyname}</td>
      <td>{d.partyaddress}</td>
      <td>{d.phone}</td>
      <td >{d.name}</td>
      <td >{d.price}</td>
      <td>{<button style={{backgroundColor:'red',borderRadius:'10px',width:'auto',padding:15}} value={d.id} onClick={Deletitem}>Delete</button>}</td>
      
    </tr>
    })
    
  }
  </tbody>
</table>

</div>
    </div>
  )
}

export default PurchaseReport
