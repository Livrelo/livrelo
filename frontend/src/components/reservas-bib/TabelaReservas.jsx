import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ModalEmprestimo from "../modal/ModalEmprestimo";
import "./styles.css";

export default function TabelaReservas({ rows }) {
    const [filterModel, setFilterModel] = React.useState({
        items: [],
    });
    const [openModal, setOpenModal] = useState(false);
        const [selectedReserva, setSelectedReserva] = useState(null);

    const handleOpenModal = (idReserva, idLivro) => {
        setSelectedReserva(idReserva, idLivro);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedReserva(null);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        { field: "usuario", headerName: "Usuário", width: 260 },
        { field: "idLivro", headerName: "ID Livro", width: 70 },
        { field: "tituloLivro", headerName: "Livro", width: 250 },
        { field: "dataRetirada", headerName: "Data para retirada", width: 200 },
        { field: "prazo", headerName: "Prazo para retirada", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 150,
            renderCell: (params) => {
                const status = params.value;
                let color = "gray";
                if (status === "Encerrada por prazo") color = "red";
                if (status === "Concluída") color = "green";

                return (
                    <span style={{ color, fontWeight: "bold" }}>
                        {status}
                    </span>
                );
            },
        },
        {
            field: "retirada",
            headerName: "Registrar empréstimo",
            width: 200,
            renderCell: (params) => (
                <Tooltip title="Registrar empréstimo">
                    <IconButton
                        color="primary"
                        onClick={() => handleOpenModal(params.row.id, params.row.idLivro)}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            ),
        },
    ];

    return (
        <div className="tabela-reservas">
            <DataGrid
                rows={rows}
                columns={columns}
                filterModel={filterModel}
                onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
                slots={{ toolbar: GridToolbar }}
                disableColumnFilter={false}
            />
            <ModalEmprestimo
                open={openModal}
                handleClose={handleCloseModal}
                idReserva={selectedReserva} //passa o id da reserva
                idLivro = {selectedReserva} //ja passa o id do livro
            />
        </div>
    );
}
