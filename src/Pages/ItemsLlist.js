import React from 'react'
import Cards from '../components/Cards'
import { Navbar } from 'react-bootstrap'
import Navbr from '../components/Navbr'

function ItemsLlist({items}) {
    console.log(items)
  return (
    <div>
    <Navbr/>

    <br/>
    <br/>
     {
        
       items.map((innddata)=>{
       return  <Cards   dataset={innddata}  key={innddata.key} />
       }) 
     } 
    </div>
  )
}

export default ItemsLlist
