import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import Navbar from "../../../components/navbar/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';  
import Button from '@mui/material/Button';
import "./style.css"


function Detalhamento(){
    const {id} = useParams;
   const livro = {
        id: 1,
        imagem: "https://m.media-amazon.com/images/I/71MuD6Hn8OL._AC_UF1000,1000_QL80_.jpg",
        titulo: "Diario de um banana",
        autor: "Carol, Caio, Flavio, Luiz, Vinicius, Yzhak",
        editora: "Livrelo",
        ano:'2025',
        status: "disponivel"
    }
     const theme = createTheme({
            palette: {
              blues: {
                main: '#2a4fa0',
                light: '#162E62',
                dark: '#112757',
                contrastText: '#ffffff',
              }
            },
          });

    return(
        <>
            <Navbar/>
            <div className="Container_Detalhamento_Livro">
                <div className="imgLivro_nomeLivro">
                    <img className = "imgLivro" src={livro.imagem} alt="imgLivro" />
                    <span className="nomeLivro">{livro.titulo}</span>
                </div>
                <div className="quadro_info_livro">
                    <span className="info_livro_titulo">{livro.titulo}</span>
                    <div className="info_livro">
                        <span className="atributo_livro">Autor(es): {livro.autor}</span>
                        <span className="atributo_livro">Editora: {livro.editora}</span>
                        <span className="atributo_livro">Ano: {livro.ano}</span>
                        <span className="atributo_livro">Status: {livro.status}</span>
                    </div>
                    <div className="div_btn_reservar">
                        <ThemeProvider theme={theme}>
                            <Button className="btn_reservar" variant="contained" color="blues" size='large'>Solicitar Reserva</Button>
                        </ThemeProvider>
                    </div>

                </div>

            </div>
        
        </>
    )

}

export default Detalhamento