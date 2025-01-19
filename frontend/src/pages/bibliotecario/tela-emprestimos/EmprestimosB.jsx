import React from "react";
import Footer from "../../../components/footer/Footer";
import NavbarB from "../../../components/navbar-bib/NavbarB";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import TabelaEmprestimos from "../../../components/emprestimos-bib/TabelaEmprestimos";
import "./styles.css";

export default function EmprestimosB() {
    const emprestimos = [
        { id: 1, usuario: "fulano da silva", tituloLivro: "Dom Casmurro", dataEmprestimo: "10/01/2025", dataFim: "20/01/2025", status: "Ativo", dataDevolucao: "" },
        { id: 2, usuario: "harry potter da silva", tituloLivro: "1984", dataEmprestimo: "05/01/2025", dataFim: "15/01/2025", status: "Concluído", dataDevolucao: "14/01/2025" },
        { id: 3, usuario: "caio santos dev", tituloLivro: "O Hobbit", dataEmprestimo: "12/01/2025", dataFim: "18/01/2025", status: "Atrasado", dataDevolucao: "" },
        { id: 4, usuario: "carolzinha", tituloLivro: "Orgulho e Preconceito", dataEmprestimo: "18/01/2025", dataFim: "30/01/2025", status: "Ativo", dataDevolucao: "" },
        { id: 5, usuario: "banguela gatao", tituloLivro: "A Revolução dos Bichos", dataEmprestimo: "02/01/2025", dataFim: "18/01/2025", status: "Atrasado", dataDevolucao: "" },
        { id: 6, usuario: "marcelo areas", tituloLivro: "O Senhor dos Anéis", dataEmprestimo: "02/01/2025", dataFim: "18/01/2025", status: "Atrasado", dataDevolucao: "" },
    ];

    return (
        <div>
            <NavbarB />
            <div className="page-content-emprestimos">
            <div className="emprestimos-header">
                    <h2 className="titulo">Empréstimos</h2>
                    <Tooltip title="Adicionar Empréstimos" arrow>
                        <IconButton
                            color="primary"
                            //onClick={addEmprestimo}
                            className="add-emprestimo-button"
                        >
                            <AddIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                    </Tooltip>
                </div>
                <TabelaEmprestimos rows={emprestimos} />
            </div>
            <Footer />
        </div>
    );
}
