import React from 'react'
import Cards from '../components/Cards'
import { Navbar } from 'react-bootstrap'
import Navbr from '../components/Navbr'

function ItemsLlist({items}) {
    console.log("passed items"+items)
  return (
    <div>
    <Navbr/>

    <br/>
    <br/>
     {
        
       items.map((innddata)=>{

        //console.log(innddata)

      return  innddata.map((d)=>{
          console.log(d)
          return  <Cards   dataset={d}   key={d.id} />
        })
      
       }) 
     } 
    </div>
  )
}

export default ItemsLlist
