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
        <Route path='/' element = {<h1> This is Homepage</h1> } />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
