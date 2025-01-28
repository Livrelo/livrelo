import {React, useState} from "react";
import Navbar from "../../../components/navbar/Navbar";
import LivroEmprestado from "../../../components/livro-emprestado/LivroEmprestado";
import "./styles.css";
import Footer from "../../../components/footer/Footer";
import ModalRenovacao from "../../../components/modal_renovacao/ModalRenovacao";

export default function Emprestimos() {

    //emprestimos so pra testar dps puxar do backend 
    const emprestimos = [
        {id:1, titulo: "Harry Potter e o blablabla", dataFim: "2025-01-11", dataDevolucao: null, status: "atrasado" },
        {id:2, titulo: "Diário de um Banana", dataFim: "2025-01-25", dataDevolucao: "2025-01-22", status: "finalizado" },
        {id:3, titulo: "Jogos Vorazes", dataFim: "2025-01-30", dataDevolucao: null, status: "no-prazo" },
        {id:4, titulo: "O Senhor dos Anéis", dataFim: "2025-02-05", dataDevolucao: null, status: "no-prazo" },
        {id:5, titulo: "Percy Jackson e o Ladrão de Raios", dataFim: "2025-01-15", dataDevolucao: "2025-01-12", status: "finalizado" },
        {id:6, titulo: "1984", dataFim: "2025-01-10", dataDevolucao: null, status: "atrasado" },
    ];
    const[openModalRenovacao, setOpenModalRenovacao]= useState(false);
    
        const handleOpen = (id)=>{
            // console.log("handle open "+ openModalRenovacao)
            setOpenModalRenovacao(prevState => ({ ...prevState, [id]: true }));
            // console.log("handle open "+ openModalRenovacao)
        }
        const handleCloseModalRenovacao = (id)=>{
            setOpenModalRenovacao(prevState => ({ ...prevState, [id]: false }));;
            // console.log("fechamento "+ openModalRenovacao);
        }

    return (
        <div>
            <Navbar />
            <div className="page-content-emprestimos">
                <h1 className="emprestimos-title">Empréstimos</h1>
                <div className="emprestimos-list">
                    {emprestimos.map((livro, index) => (
                        <>
                            <LivroEmprestado
                                onClick={()=>handleOpen(index)}
                                key={index}
                                titulo={livro.titulo}
                                dataFim={livro.dataFim}
                                dataDevolucao={livro.dataDevolucao}
                                status={livro.status}
                                />
                            <ModalRenovacao 
                                // key={index}
                                datafim={livro.dataFim}
                                open={openModalRenovacao[index] || false}
                                onClose={() => handleCloseModalRenovacao(index)}
                            />
                        </>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
