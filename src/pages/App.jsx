import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Cow from './Cow';
import User from './User';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/cow' element={<Cow />} />
          <Route exact path='/user' element={<User />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
