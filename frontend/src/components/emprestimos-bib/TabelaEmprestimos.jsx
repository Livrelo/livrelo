import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ModalDevolucao from "../modal/ModalDevolucao";
import "./styles.css";

export default function TabelaEmprestimos({ rows, onAddDevolucao }) {
    const [openModal, setOpenModal] = useState(false);
    const [selectedEmprestimo, setSelectedEmprestimo] = useState(null);

    const handleOpenModal = (idEmprestimo) => {
        setSelectedEmprestimo(idEmprestimo);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedEmprestimo(null);
    };

    const [filterModel, setFilterModel] = React.useState({
        items: [],
    });

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

                return (
                    <span style={{ color, fontWeight: "bold" }}>
                        {status}
                    </span>
                );
            },
        },
        {
            field: "renovar",
            headerName: "Renovação",
            width: 100,
            renderCell: (params) =>
                params.value ? (
                    params.value
                ) : (
                    <Tooltip title="Renovar empréstimo">
                        <IconButton color="primary">
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                ),
        },
        {
            field: "dataDevolucao",
            headerName: "Devolução",
            width: 100,
            renderCell: (params) =>
                params.value ? (
                    params.value
                ) : (
                    <Tooltip title="Adicionar Devolução">
                        <IconButton
                            color="primary"
                            onClick={() => handleOpenModal(params.row.id)} //passa o id do emprstimo
                        >
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
            <ModalDevolucao
                open={openModal}
                handleClose={handleCloseModal}
                idEmprestimo={selectedEmprestimo} //passa o id pelo emprestimo selecioado
            />
        </div>
    );
}
