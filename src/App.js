import React from 'react'
import './App.css';
import Verified from './verify/Verified';
import Bty from './verify/bty'
import VerifyNo from './verify/VerifyNo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='main'>
      <Router>
        <Routes>
        <Route path="/" exact element={<Bty />} /> 
        <Route path="/VerifyNo" exact element={<VerifyNo />} />
         <Route path="/Verified" exact element={<Verified />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
