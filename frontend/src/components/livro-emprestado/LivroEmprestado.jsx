import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ModalRenovacao from "../modal/ModalRenovacao";
import { API_HEADER } from "../../utils/config";
import "./styles.css";
import formatarData from "../../utils/formatDate";

export default function LivroEmprestado({ idEmprestimo, titulo, dataFim, dataDevolucao, status }) {
    const [openModal, setOpenModal] = useState(false);
    console.log(API_HEADER)
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
                    {isFinalizado ? `Devolvido em: ${formatarData(new Date(dataDevolucao))}` : `Devolver até: ${formatarData(new Date(dataFim))}`}
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
