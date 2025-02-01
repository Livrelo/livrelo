import React, { useState } from "react";
import { Button, Box, Typography } from '@mui/material';
import ModalCancelarReserva from '../modal/ModalCancelarReserva';
import './styles.css';


function formatarData(data) {
    // Verifica se a entrada é um objeto Date válido
    if (!(data instanceof Date) || isNaN(data)) {
        throw new TypeError("A entrada deve ser um objeto Date válido.");
    }

    // Extrai o dia, mês e ano
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do 0
    const ano = String(data.getFullYear()).slice(-2); // Pega os últimos dois dígitos do ano

    // Retorna a data formatada
    return `${dia}/${mes}/${ano}`;
}


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
                Data de Reserva: {formatarData(new Date(dataRetirada))}
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
