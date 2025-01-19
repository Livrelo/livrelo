import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./styles.css";

export default function TabelaEmprestimos({ rows, onAddDevolucao }) {
    const [filterModel, setFilterModel] = React.useState({
        items: [],
    });

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        { field: "usuario", headerName: "Usuário", width: 260 },
        { field: "tituloLivro", headerName: "Livro", width: 250 },
        { field: "dataEmprestimo", headerName: "Data de Empréstimo", width: 200 },
        { field: "dataFim", headerName: "Fim do Empréstimo", width: 200 },
        {
            field: "status",
            headerName: "Status",
            width: 150,
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
            field: "dataDevolucao",
            headerName: "Devolução",
            width: 180,
            renderCell: (params) =>
                params.value ? (
                    params.value
                ) : (
                    <Tooltip title="Adicionar Devolução">
                        <IconButton
                            color="primary"
                            //onClick={() => onAddDevolucao(params.row.id)}
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
        </div>
    );
}
