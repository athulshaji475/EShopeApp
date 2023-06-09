
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Pages/Login';
import PgNotefound from './Pages/PgNotefound';
import Homepage from './Pages/Homepage';
import { useState } from 'react';
import ItemsLlist from './Pages/ItemsLlist';
import Userhome from './Pages/Userhome';
import Itemview from './Pages/Itemview';
import Billing from './Pages/Billing';
import Billingform from './components/Billingform';
import PurchaseReport from './Pages/PurchaseReport';

function App() {

const [Itemlist, setItemlist] = useState([])
const [itmnew,setitmnew]=useState([])
  const SetDatas=(d)=>{
    
   setItemlist([...Itemlist, d])
   console.log(Itemlist)
  }

  const Getitemview=(d)=>{
console.log("data from itemlist"+d)
setitmnew([d])
console.log("itm new=>"+itmnew)
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route exact path='/' element={<Login/>}/>
         <Route  path='*' element={<Login/>}/>
       <Route path='/user' element={<Userhome/>}/>
         <Route  path='/login' element={<Login/>}/>
         <Route path='/home' element={<Homepage  GetItemDatas={SetDatas} items={Itemlist} />}/>
         <Route path='/items' element={<ItemsLlist items={itmnew}  />}/>
         <Route path='/Listview' element={<Itemview  getitems={Getitemview}    />}/>
         <Route path='/Billing' element={<Billing/>}/>
         <Route path='/Bform' element={<Billingform/>}/>
         <Route path='/Purchasereport' element={<PurchaseReport/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
