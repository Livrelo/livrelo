import React from 'react';
import LivroReservado from "../../../components/livro-reservado/LivroReservado";
import Navbar from '../../../components/navbar/Navbar';
import { Box } from '@mui/material';
import './styles.css';
import Footer from '../../../components/footer/Footer';

const reservas = [
    {
        idReserva: 1,
        titulo: "O Alquimista",
        dataRetirada: "2025-01-15",
    },
    {
        idReserva: 2,
        titulo: "Diário de um Banana",
        dataRetirada: "2025-01-20",
    },
    {
        idReserva: 3,
        titulo: "Harry Potter e a Pedra Filosofal",
        dataRetirada: "2025-01-18",
    },
    {
        idReserva: 4,
        titulo: "O Hobbit",
        dataRetirada: "2025-01-22",
    },
    {
        idReserva: 5,
        titulo: "A Caverna",
        dataRetirada: "2025-02-01",
    },
    {
        idReserva: 6,
        titulo: "O Senhor dos Anéis",
        dataRetirada: "2025-02-05",
    },
    {
        idReserva: 7,
        titulo: "O Pequeno Príncipe",
        dataRetirada: "2025-02-10",
    },
    {
        idReserva: 8,
        titulo: "1984",
        dataRetirada: "2025-02-12",
    },
    {
        idReserva: 9,
        titulo: "Fahrenheit 451",
        dataRetirada: "2025-02-15",
    },
    {
        idReserva: 10,
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
                        {reservas.map((reservas) => (
                            <LivroReservado
                                key={reservas.idReserva}
                                idReserva={reservas.idReserva}
                                titulo={reservas.titulo}
                                dataRetirada={reservas.dataRetirada}
                            />
                        ))}
                    </div>
                </Box>
            </div>
            <Footer />
        </div>
    );
}
