import React from "react";
import { Box, Typography } from "@mui/material";
import "./styles.css";

export default function LivroEmprestado({onClick,titulo, dataFim, dataDevolucao, status }) {
    const isFinalizado = !!dataDevolucao;

    //talvez mudar quando integrar com back
    const statusMessage = isFinalizado
        ? "Finalizado"
        : status === "atrasado"
        ? "Atrasado"
        : "No Prazo";

    const statusClass = isFinalizado
        ? "finalizado"
        : status === "atrasado"
        ? "atrasado"
        : "no-prazo";

    return (
        <Box onClick={onClick} className="livro-emprestado-container">
            <Typography className="livro-emprestado-titulo">{titulo}</Typography>
            <Typography className="livro-emprestado-data">
                {isFinalizado ? `Devolvido em: ${dataDevolucao}` : `Devolver até: ${dataFim}`}
            </Typography>
            <Box className={`livro-emprestado-status ${statusClass}`}>
                {statusMessage}
            </Box>
        </Box>
    );
}
