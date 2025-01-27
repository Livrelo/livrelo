import {React, useState} from "react";
import { Box, Typography } from "@mui/material";
import "./styles.css";
import ModalRenovacao from "../modal_renovação/ModalRenovacao";

export default function LivroEmprestado({titulo, dataFim, dataDevolucao, status }) {
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

    const[openModalRenovacao, setOpenModalRenovacao]= useState(false);

    const handleOpen = ()=>{
        console.log("handle open "+ openModalRenovacao)
        setOpenModalRenovacao(true)
        console.log("handle open "+ openModalRenovacao)
    }
    const handleCloseModalRenovacao = ()=>{
        setOpenModalRenovacao(false);
        console.log("fechamento "+ openModalRenovacao);
    }
    return (
        <Box onClick={handleOpen} className="livro-emprestado-container">
            <Typography className="livro-emprestado-titulo">{titulo}</Typography>
            <Typography className="livro-emprestado-data">
                {isFinalizado ? `Devolvido em: ${dataDevolucao}` : `Devolver até: ${dataFim}`}
            </Typography>
            <Box className={`livro-emprestado-status ${statusClass}`}>
                {statusMessage}
            </Box>
            <ModalRenovacao 
                datafim={dataFim}
                open={openModalRenovacao}
                onClose={handleCloseModalRenovacao}
            />
        </Box>
    );
}
