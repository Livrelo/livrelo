import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ModalRenovacao from "../modal/ModalRenovacao";
import "./styles.css";

export default function LivroEmprestado({ idEmprestimo, titulo, dataFim, dataDevolucao, status }) {
    const [openModal, setOpenModal] = useState(false);

    const isFinalizado = !!dataDevolucao;

    //status
    const statusMessage = isFinalizado
        ? "Finalizado"
        : status === "Atrasado"
            ? "Atrasado"
            : "No Prazo";

    const statusClass = isFinalizado
        ? "finalizado"
        : status === "Atrasado"
            ? "atrasado"
            : "no-prazo";

    //so abre o modal se esta no prazo
    const handleClick = (idEmprestimo) => {
        if (!isFinalizado) {
            setOpenModal(true);
            console.log("id emprestimo: " + idEmprestimo)
        }
    };

    return (
        <>
            <Box onClick={() => handleClick(idEmprestimo)} className="livro-emprestado-container">
                <Typography className="livro-emprestado-titulo">{titulo}</Typography>
                <Typography className="livro-emprestado-data">
                    {isFinalizado ? `Devolvido em: ${dataDevolucao}` : `Devolver até: ${dataFim}`}
                </Typography>
                <Box className={`livro-emprestado-status ${statusClass}`}>
                    {statusMessage}
                </Box>
            </Box>

            <ModalRenovacao
                open={openModal}
                handleClose={() => setOpenModal(false)}
                idEmprestimo={idEmprestimo}
                dataFim={dataFim}
            />
        </>
    );
}
