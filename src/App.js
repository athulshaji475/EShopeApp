
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Pages/Login';
import PgNotefound from './Pages/PgNotefound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/'  element={<Login/>}/>
          <Route exact path='*'  element={<PgNotefound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
