import React, { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ModalEmprestimo from "../modal/ModalEmprestimo";
import "./styles.css";
import formatarData from "../../utils/formatDate";

export default function TabelaReservas({rows}) {
    const [filterModel, setFilterModel] = React.useState({
        items: [],
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReserva, setSelectedReserva] = useState(null);

    const handleOpenModal = (row) => {
        console.log(row);
        setSelectedReserva(row);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedReserva(null);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        { 
            field: "usuario",
            headerName: "Usuário", 
            width: 260,
            renderCell: (params) => {
                return (
                    <span>{params.row.usuario.nome}</span>
                )
            }
        },
        { field: "idLivro", headerName: "ID Livro", width: 70 },
        { 
            field: "tituloLivro", 
            headerName: "Livro", 
            width: 250,
            renderCell: (params) => {
                console.log(params)
                return (
                    <span>{params.row.livro.nome}</span>
                )
            }
        },
        { 
            field: "dataReserva", 
            headerName: "Data reservada", 
            width: 200,
            renderCell: (params) => {
                return (
                    <span>{formatarData(new Date(params.value))}</span>
                )
            }
        },
        { 
            field: "prazoReserva", 
            headerName: "Prazo para retirada", 
            width: 200,
            renderCell: (params) => {
                return (
                    <span>{formatarData(new Date(params.value))}</span>
                )
            }
        },
        {
            field: "status",
            headerName: "Status",
            width: 150,
            renderCell: (params) => {
                const status = params.value;
                let color = "gray";
                if (status === "Cancelada") color = "red";
                if (status === "Finalizada") color = "green";

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
            renderCell: (params) => {
                console.log("params row aqui")
                console.log(params.row)
                return (
                    <Tooltip title="Registrar empréstimo">
                        {!(params.row.status === "Finalizada" || params.row.status === "Cancelada") ? (
                            <IconButton
                                color="primary"
                                disabled={params.row.status === "Finalizada" || params.row.status === "Cancelada"}
                                onClick={() => handleOpenModal(params.row)}
                            >
                                <AddIcon />
                            </IconButton>
                        ) : <></>}
                    </Tooltip>
                )},
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
            {selectedReserva && (
                <ModalEmprestimo
                    open={isModalOpen}
                    handleClose={handleCloseModal}
                    reserva={selectedReserva}
                />

            )}
        </div>
    );
}
