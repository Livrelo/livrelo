import {React, useState} from "react";
import Navbar from "../../../components/navbar/Navbar";
import LivroEmprestado from "../../../components/livro-emprestado/LivroEmprestado";
import "./styles.css";
import Footer from "../../../components/footer/Footer";
import ModalRenovacao from "../../../components/modal/ModalRenovacao";

export default function Emprestimos() {

    //emprestimos so pra testar dps puxar do backend 
    const emprestimos = [
        {idEmprestimo:1, titulo: "Harry Potter e o blablabla", dataFim: "2025-01-11", dataDevolucao: null, status: "atrasado" },
        {idEmprestimo:2, titulo: "Diário de um Banana", dataFim: "2025-01-25", dataDevolucao: "2025-01-22", status: "finalizado" },
        {idEmprestimo:3, titulo: "Jogos Vorazes", dataFim: "2025-01-30", dataDevolucao: null, status: "no-prazo" },
        {idEmprestimo:4, titulo: "O Senhor dos Anéis", dataFim: "2025-02-05", dataDevolucao: null, status: "no-prazo" },
        {idEmprestimo:5, titulo: "Percy Jackson e o Ladrão de Raios", dataFim: "2025-01-15", dataDevolucao: "2025-01-12", status: "finalizado" },
        {idEmprestimo:6, titulo: "1984", dataFim: "2025-01-10", dataDevolucao: null, status: "atrasado" },
    ];


    return (
        <div>
            <Navbar />
            <div className="page-content-emprestimos">
                <h1 className="titulo">Empréstimos</h1>
                <div className="emprestimos-list">
                    {emprestimos.map((emprestimo, index) => (
                        <>
                            <LivroEmprestado
                                key={index}
                                titulo={emprestimo.titulo}
                                dataFim={emprestimo.dataFim}
                                dataDevolucao={emprestimo.dataDevolucao}
                                status={emprestimo.status}
                                idEmprestimo={emprestimo.idEmprestimo}
                                />

                        </>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
