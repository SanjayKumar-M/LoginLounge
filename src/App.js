import Register from './Components/Register';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/register' element = {<Register />} />
        <Route path='/dashboard' element = {<Dashboard />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/' element = {<Register />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
