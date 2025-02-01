import React, { useState } from "react";
import { Button, Box, Typography } from '@mui/material';
import ModalCancelarReserva from '../modal/ModalCancelarReserva';
import './styles.css';

export default function LivroReservado({ titulo, dataRetirada, idReserva }) {

    const [openModal, setOpenModal] = useState(false);
    // const [selectedReserva, setSelectedReserva] = useState(null);

    const handleOpenModal = (idReserva, titulo) => { //recebendo o idReserva pra usar depois na logica do backend
        // setSelectedReserva(idReserva, titulo); 
        setOpenModal(true);
        console.log("titulo: "+titulo)
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        // setSelectedReserva(null);
    };

    return (
        <Box className="livro-reservado-container">
            <Typography className="livro-reservado-titulo">
                {titulo}
            </Typography>
            <Typography className="livro-reservado-data">
                Data de Retirada: {dataRetirada}
            </Typography>

            <Button
                variant="contained"
                className="livro-reservado-botao"
                onClick={() => handleOpenModal(idReserva, titulo)}
            >
                Cancelar Reserva
            </Button>
            <ModalCancelarReserva
                open={openModal}
                handleClose={handleCloseModal}
                idReserva={idReserva}
                titulo = {titulo}
            />
        </Box>
    );
}
