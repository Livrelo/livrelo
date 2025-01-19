import React from "react";
import Footer from "../../../components/footer/Footer";
import NavbarB from "../../../components/navbar-bib/NavbarB";
import "./styles.css";
import TabelaReservas from "../../../components/reservas-bib/TabelaReservas";

export default function ReservasB() {
    
    const reservas = [
        {
            id: 1,
            usuario: "Fulano da Silva",
            tituloLivro: "Dom Casmurro",
            dataRetirada: "2025-01-20",
            prazo: "2025-01-22",
            status: "Ativa",
        },
        {
            id: 2,
            usuario: "Harry Potter",
            tituloLivro: "O Senhor dos Anéis",
            dataRetirada: "2025-01-18",
            prazo: "2025-01-20",
            status: "Concluída",
        },
        {
            id: 3,
            usuario: "Maria Joaquina",
            tituloLivro: "1984",
            dataRetirada: "2025-01-15",
            prazo: "2025-01-17",
            status: "Encerrada por prazo",
        },
        {
            id: 4,
            usuario: "Cirilo",
            tituloLivro: "O Hobbit",
            dataRetirada: "2025-01-22",
            prazo: "2025-01-24",
            status: "Ativa",
        },
        {
            id: 5,
            usuario: "Ana Carolina",
            tituloLivro: "A Revolução dos Bichos",
            dataRetirada: "2025-01-19",
            prazo: "2025-01-21",
            status: "Ativa",
        },
    ];
    
    return (
        <div>
            <NavbarB />
            <div className="page-content-reservas">
                <h2 className="titulo">Reservas</h2>
                <TabelaReservas rows={reservas} />
            </div>
            <Footer />
        </div>
    );
}
