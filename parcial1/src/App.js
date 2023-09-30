import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.js';
import Detail from './components/Detail.js';
import Carro from './components/Carro.js';

function App() {


  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/carro" element={<Carro />} />
         <Route path="/carro/detail/:partName" element={<Detail />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;