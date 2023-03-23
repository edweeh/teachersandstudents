import logo from './logo.svg';
import './App.css';
import Read from './components/Read';
import Teach from './components/Teach';
import Addstud from './components/Addstud';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='App'>
     <BrowserRouter>
      
   
      <Navbar></Navbar>
 
      <Routes>
        <Route path='/' element={<Read></Read>}></Route>
        <Route path='/add' element={<Addstud data={{id: '', name: '', grade: ''}} method='post' />}></Route>
        {/* <Route path='/teach' element={<Teach></Teach>}></Route> */}
      </Routes>
      </BrowserRouter>

  </div>
  );
}

export default App;
