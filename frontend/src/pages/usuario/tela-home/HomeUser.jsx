import React, { useEffect } from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import LivroCard from '../../../components/livro-card/LivroCard';
import Grid from '@mui/material/Grid';
import useLivrosStore from "../../../zustand/livro/livro.js";
import './styles.css'; 
//aqui na home tem que ter uma funçao pra verificar se está logado ou nao, se sim ok se nao tem que carregar outro tipo de pagina com uma mini introducao etc

function HomeUser() {
    const {fetchLivros, livros} = useLivrosStore();

    
    useEffect(() => {
        console.log("fetching livros")
        fetchLivros();
    }, [])

    
    return (
        <div>
        <Navbar />
        <div className="home-container">
            
            <Grid container spacing={0.5} className="books-grid"> 
                {livros.filter((livro) => livro.status !== "Deletado").map((livro) => (
                    <Grid item xs={12} sm={6} md={2} key={livro.id}>
                        <LivroCard 
                            idlivro={livro.idLivro}
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
