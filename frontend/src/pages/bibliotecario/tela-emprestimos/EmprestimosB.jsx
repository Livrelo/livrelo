import React, { useState } from "react";
import Footer from "../../../components/footer/Footer";
import NavbarB from "../../../components/navbar-bib/NavbarB";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import TabelaEmprestimos from "../../../components/emprestimos-bib/TabelaEmprestimos";
import ModalEmprestimo from "../../../components/modal/ModalEmprestimo";
import "./styles.css";

export default function EmprestimosB() {
    const emprestimos = [
        { id: 1, usuario: "fulano da silva", idLivro: 1, tituloLivro: "Dom Casmurro", dataEmprestimo: "10/01/2025", dataFim: "20/01/2025", status: "Ativo", dataDevolucao: "" },
        { id: 2, usuario: "harry potter da silva", idLivro: 2, tituloLivro: "1984", dataEmprestimo: "05/01/2025", dataFim: "15/01/2025", status: "Concluído", dataDevolucao: "14/01/2025" },
        { id: 3, usuario: "caio santos dev", idLivro: 3, tituloLivro: "O Hobbit", dataEmprestimo: "12/01/2025", dataFim: "18/01/2025", status: "Atrasado", dataDevolucao: "" },
        { id: 4, usuario: "carolzinha", idLivro: 4, tituloLivro: "Orgulho e Preconceito", dataEmprestimo: "18/01/2025", dataFim: "30/01/2025", status: "Ativo", dataDevolucao: "" },
        { id: 5, usuario: "banguela gatao", idLivro: 5, tituloLivro: "A Revolução dos Bichos", dataEmprestimo: "02/01/2025", dataFim: "18/01/2025", status: "Atrasado", dataDevolucao: "" },
        { id: 6, usuario: "marcelo areas", idLivro: 6, tituloLivro: "O Senhor dos Anéis", dataEmprestimo: "02/01/2025", dataFim: "18/01/2025", status: "Atrasado", dataDevolucao: "" },
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
            <div className="page-content-emprestimos">
                <div className="emprestimos-header">
                    <h2 className="titulo">Empréstimos</h2>
                    <Tooltip title="Adicionar Empréstimos" arrow>
                        <IconButton
                            color="primary"
                            onClick={handleOpenModal}
                            className="add-emprestimo-button"
                        >
                            <AddIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                    </Tooltip>
                </div>
                <TabelaEmprestimos rows={emprestimos} />
            </div>
            <Footer />
            <ModalEmprestimo open={openModal} handleClose={handleCloseModal} />
        </div>
    );
}
