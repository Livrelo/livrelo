import React from "react";
import Footer from "../../../components/footer/Footer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import "./styles.css";
import NavbarB from "../../../components/navbar-bib/NavbarB";
import LivroCardB from "../../../components/livro-card-bib/LivroCardB";

const livros = [
    {
        id: 1,
        imagem: "https://m.media-amazon.com/images/I/71MuD6Hn8OL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        id: 2,
        imagem: "https://images.tcdn.com.br/img/img_prod/971248/diario_de_um_banana_v_13_batalha_neval_283_1_b0efb5b63bff02f656067ce056d49e88.jpg",
    },
    {
        id: 3,
        imagem: "https://m.media-amazon.com/images/I/41fRkzhEHkL._SY445_SX342_.jpg",
    },
    {
        id: 4,
        imagem: "https://m.media-amazon.com/images/I/41897yAI4LL._SY445_SX342_.jpg",
    },
    {
        id: 5,
        imagem: "https://m.media-amazon.com/images/I/41kT95iZ81L._SY445_SX342_.jpg",
    },
    {
        id: 6,
        imagem: "https://m.media-amazon.com/images/I/51SnGLrrJcL._SY445_SX342_.jpg",
    },
    {
        id: 7,
        imagem: "https://m.media-amazon.com/images/I/41gBzGDn3XL._SY445_SX342_.jpg",
    },
    {
        id: 8,
        imagem: "https://m.media-amazon.com/images/I/41qHtQr4lkL._SY445_SX342_.jpg",
    },
];

export default function AcervoB() {
    const handleEdit = (id) => {
        //logica de editar o livro (detalhes atualizar apagar etc)
    };

    const handleAddBook = () => {
        //logica de adicionar novo livro
    };

    return (
        <div>
            <NavbarB />
            <div className="acervo-container">
                <div className="acervo-header">
                    <h2 className="titulo">Acervo completo</h2>
                    <Tooltip title="Adicionar livro" arrow>
                        <IconButton
                            color="primary"
                            onClick={handleAddBook}
                            className="add-book-button"
                        >
                            <AddIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                    </Tooltip>
                </div>
                <Grid container spacing={2} className="books-grid">
                    {livros.map((livro) => (
                        <Grid item xs={12} sm={6} md={3} lg={2} key={livro.id}>
                            <LivroCardB
                                imagem={livro.imagem}
                                onEditClick={() => handleEdit(livro.id)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <Footer />
        </div>
    );
}
