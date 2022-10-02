import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route exact path='/registrarse' element={<Register />}/>
        <Route exact path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
