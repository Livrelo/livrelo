import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import LivroEmprestado from "../../../components/livro-emprestado/LivroEmprestado";
import "./styles.css";

export default function Emprestimos() {

    //emprestimos so pra testar dps puxar do backend 
    const emprestimos = [
        { titulo: "Harry Potter e o blablabla", dataFim: "2025-01-11", dataDevolucao: null, status: "atrasado" },
        { titulo: "Diário de um Banana", dataFim: "2025-01-25", dataDevolucao: "2025-01-22", status: "finalizado" },
        { titulo: "Jogos Vorazes", dataFim: "2025-01-30", dataDevolucao: null, status: "no-prazo" },
        { titulo: "O Senhor dos Anéis", dataFim: "2025-02-05", dataDevolucao: null, status: "no-prazo" },
        { titulo: "Percy Jackson e o Ladrão de Raios", dataFim: "2025-01-15", dataDevolucao: "2025-01-12", status: "finalizado" },
        { titulo: "1984", dataFim: "2025-01-10", dataDevolucao: null, status: "atrasado" },
    ];


    return (
        <div>
            <Navbar />
            <div className="page-content-emprestimos">
                <h1 className="emprestimos-title">Empréstimos</h1>
                <div className="emprestimos-list">
                    {emprestimos.map((livro, index) => (
                        <LivroEmprestado
                            key={index}
                            titulo={livro.titulo}
                            dataFim={livro.dataFim}
                            dataDevolucao={livro.dataDevolucao}
                            status={livro.status}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
