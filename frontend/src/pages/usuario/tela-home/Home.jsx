import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import LivroCard from '../../../components/livro-card/LivroCard';
import Grid from '@mui/material/Grid';
import './styles.css'; 

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

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-container"> 
        <Grid container spacing={0.5} className="books-grid"> 
            {livros.map((livro) => (
                <Grid item xs={12} sm={6} md={2} key={livro.id}>
                    <LivroCard 
                        imagem={livro.imagem} 
                    />
                </Grid>
            ))}
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
