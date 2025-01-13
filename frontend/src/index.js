import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/usuario/tela-home/Home';
import Reservas from './pages/usuario/tela-minhas-reservas/Reservas';
import ReservarLivro from './pages/usuario/tela-reservar/ReservarLivro';
import Emprestimos from './pages/usuario/tela-meus-emprestimos/Emprestimos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/reservar" element={<ReservarLivro />} />
        <Route path="/emprestimos" element={<Emprestimos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
