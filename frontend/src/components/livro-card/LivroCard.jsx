import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import './styles.css'; 

export default function LivroCard({ imagem }) {
    return (
        <Card className="livro-card">
            <CardActionArea>
                <CardMedia
                    component="img"
                    className="card-media"
                    image={imagem}
                />
            </CardActionArea>
        </Card>
    );
}
