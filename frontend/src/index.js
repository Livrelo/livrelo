import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/landing-page/Home.jsx';
import HomeUser from './pages/usuario/tela-home/HomeUser.jsx';
import Reservas from './pages/usuario/tela-minhas-reservas/Reservas';
import ReservarLivro from './pages/usuario/tela-reservar/ReservarLivro';
import Emprestimos from './pages/usuario/tela-meus-emprestimos/Emprestimos';
import HomeB from './pages/bibliotecario/tela-home-b/HomeB';
import AcervoB from './pages/bibliotecario/tela-acervo/AcervoB';
import EmprestimosB from './pages/bibliotecario/tela-emprestimos/EmprestimosB';
import ReservasB from './pages/bibliotecario/tela-reservas/ReservasB';
import SignIn from './pages/usuario/tela-signin/SignIn';
import Signup from './pages/usuario/tela-signup/Signup.jsx';
import Detalhamento from './pages/usuario/tela-detalhamentoLivro/Detalhamento.jsx';
import UpdateUser from './pages/usuario/tela-updateUser/UpdateUser.jsx';
import UpdateLivro from './pages/bibliotecario/tela-updatedetalhesLivro/UpdateLivro.jsx';
import RegisterLivro from './pages/bibliotecario/tela-registro-livro/RegisterLivro.jsx';
import { toast, ToastContainer } from "react-toastify";
import ProtectedRoute from './utils/ProtectedRoute'; // Importando o middleware

export const notify = (type, message) => {
  try {
    if (type === "success") {
      toast.success(message, { autoClose: 1000 });
    } else if (type === "error") {
      toast.error(message || "Ocorreu um erro!");
    }
  } catch (error) {}
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detalhamento/:id" element={<ProtectedRoute><Detalhamento /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><HomeUser /></ProtectedRoute>} />
        <Route path="/reservas" element={<ProtectedRoute><Reservas /></ProtectedRoute>} />
        <Route path="/reservar/:id" element={<ProtectedRoute><ReservarLivro /></ProtectedRoute>} />
        <Route path="/emprestimos" element={<ProtectedRoute><Emprestimos /></ProtectedRoute>} />
        <Route path="/home-b" element={<ProtectedRoute><HomeB /></ProtectedRoute>} />
        <Route path="/acervo-b" element={<ProtectedRoute><AcervoB /></ProtectedRoute>} />
        <Route path="/emprestimos-b" element={<ProtectedRoute><EmprestimosB /></ProtectedRoute>} />
        <Route path="/reservas-b" element={<ProtectedRoute><ReservasB /></ProtectedRoute>} />
        <Route path="/perfil/:id" element={<ProtectedRoute><UpdateUser /></ProtectedRoute>} />
        <Route path="/update_book/:id" element={<ProtectedRoute><UpdateLivro /></ProtectedRoute>} />
        <Route path="/register_book" element={<ProtectedRoute><RegisterLivro /></ProtectedRoute>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
