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

export const notify = (type, message) => {
	try {
    console.log("notificando")
		if (type === "success") {
			toast.success(message, {
				autoClose: 1000,
			});
		} else if (type === "error") {
			toast.error(message || "Ocorreu um erro!");
		}
	} catch (error) {}
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeUser />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/reservar/:id" element={<ReservarLivro />} />
        <Route path="/emprestimos" element={<Emprestimos />} />
        <Route path="/home-b" element={<HomeB />} />
        <Route path="/acervo-b" element={<AcervoB />} />
        <Route path="/emprestimos-b" element={<EmprestimosB />} />
        <Route path="/reservas-b" element={<ReservasB />} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/detalhamento/:id' element={<Detalhamento/>}/>
        <Route path='/update_user/:id' element={<UpdateUser/>}/>
        <Route path="/update_book/:id" element={<UpdateLivro/>}/>
        <Route path="/register_book" element={<RegisterLivro/>}/>
      </Routes>
    <ToastContainer/>
    </BrowserRouter>
  // </React.StrictMode>
);
