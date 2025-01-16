import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/usuario/tela-home/Home';
import Reservas from './pages/usuario/tela-minhas-reservas/Reservas';
import SignIn from './pages/usuario/tela-signin/SignIn';
import Signup from './pages/usuario/tela-signup/Signup.jsx';
import Detalhamento from './pages/usuario/tela-detalhamentoLivro/Detalhamento.jsx';
import UpdateUser from './pages/usuario/tela-updateUser/UpdateUser.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/detalhamento/:id' element={<Detalhamento/>}/>
        <Route path='/update_user/:id' element={<UpdateUser/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
