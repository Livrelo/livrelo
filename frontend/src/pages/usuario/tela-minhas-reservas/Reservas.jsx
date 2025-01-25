import React from 'react';
import LivroReservado from "../../../components/livro-reservado/LivroReservado";
import Navbar from '../../../components/navbar/Navbar';
import { Box } from '@mui/material';
import './styles.css';
import Footer from '../../../components/footer/Footer';

const livrosReservados = [
    {
        id: 1,
        titulo: "O Alquimista",
        dataRetirada: "2025-01-15",
    },
    {
        id: 2,
        titulo: "Diário de um Banana",
        dataRetirada: "2025-01-20",
    },
    {
        id: 3,
        titulo: "Harry Potter e a Pedra Filosofal",
        dataRetirada: "2025-01-18",
    },
    {
        id: 4,
        titulo: "O Hobbit",
        dataRetirada: "2025-01-22",
    },
    {
        id: 5,
        titulo: "A Caverna",
        dataRetirada: "2025-02-01",
    },
    {
        id: 6,
        titulo: "O Senhor dos Anéis",
        dataRetirada: "2025-02-05",
    },
    {
        id: 7,
        titulo: "O Pequeno Príncipe",
        dataRetirada: "2025-02-10",
    },
    {
        id: 8,
        titulo: "1984",
        dataRetirada: "2025-02-12",
    },
    {
        id: 9,
        titulo: "Fahrenheit 451",
        dataRetirada: "2025-02-15",
    },
    {
        id: 10,
        titulo: "O Código Da Vinci",
        dataRetirada: "2025-02-20",
    },
];


export default function Reservas() {
    return (
        <div>
            <Navbar />
            <div className="page-content-reservas">
                <Box sx={{ padding: '20px' }}>
                    <h2 className="titulo">Livros Reservados</h2>
                    <div className="reservas-list">
                        {livrosReservados.map((livro) => (
                            <LivroReservado
                                key={livro.id}
                                titulo={livro.titulo}
                                dataRetirada={livro.dataRetirada}
                            />
                        ))}
                    </div>
                </Box>
            </div>
            <Footer />
        </div>
    );
}
