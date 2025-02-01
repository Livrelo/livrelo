import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import LivroCard from '../../../components/livro-card/LivroCard';
import Grid from '@mui/material/Grid';
import useLivrosStore from "../../../zustand/livro/livro.js";
import './styles.css'; 
//aqui na home tem que ter uma funçao pra verificar se está logado ou nao, se sim ok se nao tem que carregar outro tipo de pagina com uma mini introducao etc

function HomeUser() {
    const {fetchLivros, livros} = useLivrosStore();

    console.log(livros);

    
    return (
        <div>
        <Navbar />
        <div className="home-container">
            
            <Grid container spacing={0.5} className="books-grid"> 
                {livros.map((livro) => (
                    <Grid item xs={12} sm={6} md={2} key={livro.id}>
                        <LivroCard 
                            imagem={livro.livroImage} 
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
        <Footer />
        </div>
    );
}

export default HomeUser;
