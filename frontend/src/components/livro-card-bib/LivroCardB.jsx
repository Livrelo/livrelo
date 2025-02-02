import React from "react";
import { Card, CardMedia, CardContent, Button } from "@mui/material";
import "./styles.css";

export default function LivroCardB({ imagem, onEditClick }) {
    return (
        <Card className="livro-card-bib">
            <CardMedia
                component="img"
                className="card-media-bib"
                image={require(`./../../../../backend/uploads/${imagem}`)}
                alt="Capa do Livro"
            />
            <CardContent className="livro-card-content-bib">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onEditClick}
                    className="livro-card-button"
                >
                    Editar
                </Button>
            </CardContent>
        </Card>
    );
}
