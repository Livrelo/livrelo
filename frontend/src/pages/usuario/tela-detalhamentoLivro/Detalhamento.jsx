import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import Navbar from "../../../components/navbar/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';  
import {Button, Box} from '@mui/material';
import "./style.css"
import Footer from "../../../components/footer/Footer";
import useLivrosStore from "../../../zustand/livro/livro";
import ModalReserva from "../../../components/modal/ModalReserva";
import useAuthStore from "../../../zustand/auth/auth";


function Detalhamento(){
    const { id } = useParams();

    const { conta } = useAuthStore();
    // const { usuario, fetchUsuarioByIdConta } = useUsuarioStore();
    const { livros } = useLivrosStore();


    const [ livro, setLivro ] = useState();
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
    }
    
    // const livro = livros.find((item) => item.idLivro = id);
    useEffect(() => {
        console.log(livros);
        console.log(id);
        const livroAchado = livros.find((item) => item.idLivro === Number(id));
        console.log(livroAchado)
        setLivro(livroAchado);
        // const user = async ()=>{
        //     await fetchUsuarioByIdConta(conta.idConta)
        // }
    }, [])

    const navigate = useNavigate();
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

    const modalReservaProps = {
        open: isModalOpen,
        handleClose: handleModalClose,
        idLivro: id,
        cpf: conta.cpf,
    }

    return(
        <>
            <Navbar/>
            {livro && (
                <div className="Container_Detalhamento_Livro">
                    <div className="imgLivro_nomeLivro_Detalhamento">
                        <img className = "imgDetalhamentoLivro" src={require(`./../../../../../backend/uploads/${livro.livroImage}`)} alt="imgLivro" />
                    </div>
                    <div className="quadro_detalhamento_livro">
                        <span className="detalhamento_livro_titulo">{livro.nome}</span>
                        <div className="detalhamento_livro">
                            <span className="atributo_livro">Autor(es): {livro.nomeAutor}</span>
                            <span className="atributo_livro">Editora: {livro.nomeEditora}</span>
                            <span className="atributo_livro">Ano: {livro.ano}</span>
                            <span className="atributo_livro">Status: {livro.status}</span>
                        </div>
                        <Box className="div_btn_reservar">
                            <ThemeProvider theme={theme}>
                                <Button className="btn_reservar" variant="contained" color="blues" size='large' 
                                    onClick={() => {setIsModalOpen(true)}}
                                    // onClick={() => navigate(`/reservar/${livro.idLivro}`)} 
                                    disabled={(livro.status == "Reservado" || livro.status === "Emprestado") ? true : false}
                                >Solicitar Reserva</Button>
                            </ThemeProvider>
                        </Box>

                    </div>

                </div>
            )}
            <Footer/>
            <ModalReserva {...modalReservaProps} />
        </>
    )

}

export default Detalhamento