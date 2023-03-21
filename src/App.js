import logo from './logo.svg';
import './App.css';
import Read from './components/Read';
import Teach from './components/Teach';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Bar></Bar>
      <Routes>
        <Route path='/' elements={<Teach></Teach>}></Route>
        <Route path='/students' elements={<Read></Read>}></Route>
        <Route path='/teachers' elements={<Teach></Teach>}></Route>
      </Routes>
      </BrowserRouter>


  </div>
  );
}

export default App;
