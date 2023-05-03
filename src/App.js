
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Pages/Login';
import PgNotefound from './Pages/PgNotefound';
import Homepage from './Pages/Homepage';
import { useState } from 'react';
import ItemsLlist from './Pages/ItemsLlist';
import Userhome from './Pages/Userhome';
import Itemview from './Pages/Itemview';

function App() {

const [Itemlist, setItemlist] = useState([])

  const SetDatas=(d)=>{
    
   setItemlist([...Itemlist, d])
   console.log(Itemlist)
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
         <Route path='/items' element={<ItemsLlist items={Itemlist} />}/>
         <Route path='/Listview' element={<Itemview/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
