import React from 'react'
import Navbr from '../components/Navbr'

import {Card, CardGroup, Button} from "react-bootstrap";
import '../Css/card.css';
import Cards from '../components/Cards';
import Additems from '../components/Additems';
import ItemsLlist from './ItemsLlist';

function Homepage({GetItemDatas,items}) {
    console.log('for item list'+items)
  return (
    <>
      <Navbr/>
    
    <Additems GetItemData={GetItemDatas} />
   
    
        </>
  )
}

export default Homepage
