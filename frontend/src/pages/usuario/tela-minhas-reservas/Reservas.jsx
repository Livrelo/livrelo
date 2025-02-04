import React, { useEffect } from 'react';
import LivroReservado from "../../../components/livro-reservado/LivroReservado";
import Navbar from '../../../components/navbar/Navbar';
import { Box } from '@mui/material';
import './styles.css';
import Footer from '../../../components/footer/Footer';
import useReservaStore from '../../../zustand/reserva/reserva';


export default function Reservas() {
    const { fetchReservasByCPF, reservas } = useReservaStore();

    useEffect(() => {
        fetchReservasByCPF();
        console.log(reservas);
    }, [])

    return (
        <div>
            <Navbar />
            <div className="page-content-reservas">
                <Box sx={{ padding: '20px' }}>
                    <h2 className="titulo">Livros Reservados</h2>
                    <div className="reservas-list">
                        {reservas.filter((reserva) => reserva.status === "Ativa").map((reserva) => (
                            <LivroReservado
                                key={reserva.idReserva}
                                idReserva={reserva.idReserva}
                                titulo={reserva.livro.nome}
                                dataRetirada={reserva.dataReserva}
                            />
                        ))}
                    </div>
                </Box>
            </div>
            <Footer />
        </div>
    );
}
