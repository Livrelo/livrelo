import React, { useEffect } from "react";
import Footer from "../../../components/footer/Footer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import "./styles.css";
import NavbarB from "../../../components/navbar-bib/NavbarB";
import LivroCardB from "../../../components/livro-card-bib/LivroCardB";
import useLivrosStore from "../../../zustand/livro/livro";
import { useNavigate } from "react-router-dom";

export default function AcervoB() {

    const { livros } = useLivrosStore();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(livros);
    }, []);
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
                        <Grid item xs={12} sm={6} md={3} lg={2} key={livro.idLivro}>
                            <LivroCardB
                                imagem={livro.livroImage}
                                onEditClick={() => navigate(`/update_book/${livro.idLivro}`)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <Footer />
        </div>
    );
}
