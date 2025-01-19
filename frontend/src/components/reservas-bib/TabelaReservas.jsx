import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./styles.css";

export default function TabelaReservas({ rows }) {
    const [filterModel, setFilterModel] = React.useState({
        items: [],
    });

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        { field: "usuario", headerName: "Usuário", width: 260 },
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
                        //onClick -> leva a registrar emprestimo
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
        </div>
    );
}
