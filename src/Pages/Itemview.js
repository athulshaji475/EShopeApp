import React from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Usernav from '../components/Usernav'
function Itemview({getitems}) {
const [datas,setdatas] = useState([])

useEffect(() => {
  axios.get('http://localhost:58035/api/Users')
  .then((respons)=>{
      try {
          setdatas(respons.data)
          console.log("response=>"+respons.data)
          getitems(respons.data)
      } catch (error) {
          console.log(error)
      }
  })
}, [])

const Getdata=()=>{
   
    

}
    
    

  return (
    <div>
    <Usernav/>
    
      <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>itemId</th>
          <th>Itemname</th>
          <th>Price</th>
        </tr>
      </thead>
      
        
      <tbody>
      {
        datas.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
      ))
      }
      
      
      </tbody>
      
      
    </Table>
    <button onClick={Getdata}></button>
    </div>
  )
}

export default Itemview
