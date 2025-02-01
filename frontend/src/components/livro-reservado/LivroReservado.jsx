import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import './styles.css';

export default function LivroReservado({ titulo, dataRetirada }) {
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
            >
                Cancelar Reserva
            </Button>
        </Box>
    );
}
