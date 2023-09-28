import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import LoginPass from './LoginPass';
import Detail from './Detail';

function App() {

  const [dataGET, setDataGet] = useState("{}")
  
 

  useEffect(()=>{
    fetch("https://my.api.https://raw.githubusercontent.com/Carlos-301/Parcial-1-Web/main/datos.json.com/users.json?key=").then(response => response.json()).then(data => setDataGet(JSON.stringify(data)))
  })

  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/pass" element={<LoginPass />} />
         <Route path="/mascotas/:mascotaId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;