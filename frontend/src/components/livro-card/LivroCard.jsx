import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from "react-router-dom";
import './styles.css';
import { uploadsURL } from '../../utils/imagePath';

export default function LivroCard({idlivro, imagem}) {
    const navigate = useNavigate();
    return (
        <Card className="livro-card">
            <CardActionArea onClick={()=>navigate(`/detalhamento/${idlivro}`)}>
                <CardMedia
                    component="img"
                    className="card-media"
                    // image={`${uploadsURL}/${imagem}`}
                    src={`${uploadsURL}/${imagem}`}
                />
            </CardActionArea>
        </Card>
    );
}
