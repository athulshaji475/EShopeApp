
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Pages/Login';
import PgNotefound from './Pages/PgNotefound';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route exact path='/' element={<Login/>}/>
         <Route  path='*' element={<Login/>}/>
       
         <Route  path='/login' element={<Login/>}/>
         <Route path='/home' element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
