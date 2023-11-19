import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
import Component6 from './Component6';
import Component7 from './Component7';
import Navbar from './Navbar';

function App() {
  return (
    
    <div>

      <Router>

        <Navbar/>

        <Routes>

          <Route path='/' element={<Component1/>}/>

          <Route path='2' element={<Component2/>}/>

          <Route path='3' element={<Component3/>}/>

          <Route path='4' element={<Component4/>}/>

          <Route path='5' element={<Component5/>}/>

          <Route path='6' element={<Component6/>}/>

          <Route path='7' element={<Component7/>}/>

        </Routes>

      </Router>

    </div>
  );
}

export default App;
