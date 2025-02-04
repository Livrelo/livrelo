import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from "react-router-dom";
import './styles.css';

export default function LivroCard({idlivro, imagem}) {
    const navigate = useNavigate();
    return (
        <Card className="livro-card">
            <CardActionArea onClick={()=>navigate(`/detalhamento/${idlivro}`)}>
                <CardMedia
                    component="img"
                    className="card-media"
                    image={require(`./../../../../backend/uploads/${imagem}`)}
                />
            </CardActionArea>
        </Card>
    );
}
