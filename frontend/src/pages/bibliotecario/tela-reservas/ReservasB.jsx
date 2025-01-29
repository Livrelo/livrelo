import React, { useState } from "react";
import Footer from "../../../components/footer/Footer";
import NavbarB from "../../../components/navbar-bib/NavbarB";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ModalReserva from "../../../components/modal/ModalReserva";
import "./styles.css";
import TabelaReservas from "../../../components/reservas-bib/TabelaReservas";

export default function ReservasB() {

    const reservas = [
        {
            id: 1,
            usuario: "Fulano da Silva",
            idLivro: 1,
            tituloLivro: "Dom Casmurro",
            dataRetirada: "2025-01-20",
            prazo: "2025-01-22",
            status: "Ativa",
        },
        {
            id: 2,
            usuario: "Harry Potter",
            idLivro: 2,
            tituloLivro: "O Senhor dos Anéis",
            dataRetirada: "2025-01-18",
            prazo: "2025-01-20",
            status: "Concluída",
        },
        {
            id: 3,
            usuario: "Maria Joaquina",
            idLivro: 3,
            tituloLivro: "1984",
            dataRetirada: "2025-01-15",
            prazo: "2025-01-17",
            status: "Encerrada por prazo",
        },
        {
            id: 4,
            usuario: "Cirilo",
            idLivro: 4,
            tituloLivro: "O Hobbit",
            dataRetirada: "2025-01-22",
            prazo: "2025-01-24",
            status: "Ativa",
        },
        {
            id: 5,
            usuario: "Ana Carolina",
            idLivro: 5,
            tituloLivro: "A Revolução dos Bichos",
            dataRetirada: "2025-01-19",
            prazo: "2025-01-21",
            status: "Ativa",
        },
    ];
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <NavbarB />
            <div className="page-content-reservas">
                <div className="emprestimos-header">
                    <h2 className="titulo">Reservas</h2>
                    <Tooltip title="Adicionar Reservas" arrow>
                        <IconButton
                            color="primary"
                            onClick={handleOpenModal}
                            className="add-emprestimo-button"
                        >
                            <AddIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                    </Tooltip>
                </div>
                <TabelaReservas rows={reservas} />
            </div>
            <Footer />
            <ModalReserva open={openModal} handleClose={handleCloseModal} />
        </div>
    );
}
