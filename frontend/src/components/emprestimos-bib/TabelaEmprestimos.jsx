import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ModalDevolucao from "../modal/ModalDevolucao";
import ModalRenovacao from "../modal/ModalRenovacao"; 
import { useLocation } from "react-router-dom"; 
import "./styles.css";

export default function TabelaEmprestimos({ rows, onAddDevolucao }) {
    const [openModalDevolucao, setOpenModalDevolucao] = useState(false);
    const [openModalRenovacao, setOpenModalRenovacao] = useState(false);
    const [selectedEmprestimo, setSelectedEmprestimo] = useState(null);

    const location = useLocation();
    const filtrarAtrasados = location.state?.filtrarAtrasados || false;

    //filtro de pendencias
    const [filterModel, setFilterModel] = useState({
        items: filtrarAtrasados ? [{ field: "status", operator: "equals", value: "Atrasado" }] : [],
    });

    const handleOpenModalDevolucao = (idEmprestimo) => {
        setSelectedEmprestimo(idEmprestimo);
        setOpenModalDevolucao(true);
    };

    const handleCloseModalDevolucao = () => {
        setOpenModalDevolucao(false);
        setSelectedEmprestimo(null);
    };

    const handleOpenModalRenovacao = (idEmprestimo) => {
        setSelectedEmprestimo(idEmprestimo);
        setOpenModalRenovacao(true);
    };

    const handleCloseModalRenovacao = () => {
        setOpenModalRenovacao(false);
        setSelectedEmprestimo(null);
    };

    // const renovarEmprestimo = (novaDataFim) => {
    //     if (selectedEmprestimo) {
    //         const emprestimo = rows.find((e) => e.id === selectedEmprestimo);
    //         if (emprestimo) {
    //             emprestimo.dataFim = novaDataFim;
    //             alert(`Empréstimo ID ${selectedEmprestimo} renovado até: ${novaDataFim}`);
    //         }
    //     }
    // };

    const columns = [
        { field: "id", headerName: "ID", width: 50 },
        { field: "usuario", headerName: "Usuário", width: 150 },
        { field: "idLivro", headerName: "ID Livro", width: 70 },
        { field: "tituloLivro", headerName: "Livro", width: 250 },
        { field: "dataEmprestimo", headerName: "Data de Empréstimo", width: 200 },
        { field: "dataFim", headerName: "Fim do Empréstimo", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 100,
            renderCell: (params) => {
                const status = params.value;
                let color = "gray";
                if (status === "Atrasado") color = "red";
                if (status === "Concluído") color = "green";

                return <span style={{ color, fontWeight: "bold" }}>{status}</span>;
            },
        },
        {
            field: "renovar",
            headerName: "Renovação",
            width: 100,
            renderCell: (params) => (
                <Tooltip title="Renovar empréstimo">
                    <IconButton color="primary" onClick={() => handleOpenModalRenovacao(params.row.id)}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            ),
        },
        {
            field: "dataDevolucao",
            headerName: "Devolução",
            width: 100,
            renderCell: (params) => (
                <Tooltip title="Adicionar Devolução">
                    <IconButton color="primary" onClick={() => handleOpenModalDevolucao(params.row.id)}>
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            ),
        },
    ];

    return (
        <div className="tabela-emprestimos">
            <DataGrid
                rows={rows}
                columns={columns}
                filterModel={filterModel}
                onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
                slots={{ toolbar: GridToolbar }}
                disableColumnFilter={false}
            />
            <ModalDevolucao open={openModalDevolucao} handleClose={handleCloseModalDevolucao} idEmprestimo={selectedEmprestimo} />
            <ModalRenovacao
                open={openModalRenovacao}
                handleClose={handleCloseModalRenovacao} 
                idEmprestimo={selectedEmprestimo}
                dataFim={rows.find((e) => e.id === selectedEmprestimo)?.dataFim || ""}
                // renovarEmprestimo={renovarEmprestimo}
            />
        </div>
    );
}
