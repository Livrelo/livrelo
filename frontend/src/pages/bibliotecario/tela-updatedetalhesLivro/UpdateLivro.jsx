import * as React from 'react';
import { useEffect, useState } from 'react';
import { Formik, Form } from "formik";
import NavbarB from "../../../components/navbar-bib/NavbarB.jsx"
import * as Yup from "yup";
import Input from "../../../components/Input/Input";
import {Box, Button, createTheme,Select,ThemeProvider} from '@mui/material/';
import SelectInput from '../../../components/SelectInput/Select.jsx';
import './style.css'
import { useParams } from 'react-router-dom';
import useLivrosStore from '../../../zustand/livro/livro.js';
import useCategoriaStore from '../../../zustand/categoria/categoria.js';


function UpdateLivro(){

    const {id} = useParams();

    const {livros} = useLivrosStore();
    const {categorias} = useCategoriaStore();

    const [livroAtual, setLivroAtual] = useState(null);
    const [color, setColor] = useState(null);
    const [categoriasList, setCategoriasList] = useState([]);
    const [initialCategoriasList, setInitialCategoriasList] = useState([]);

    const [selectedCategorias, setSelectedCategorias] = useState([]);

    useEffect(() => {
        console.log(livros);
        const livro = livros.find((livro) => livro.idLivro === Number(id));
        console.log(livro);

        setLivroAtual(livro);

        if(livro.status !== "Disponivel"){
            setColor("red");
        } else{
            setColor("green");
        }
    }, []);

    useEffect(() => {
        if(livroAtual){
            setInitialCategoriasList(livroAtual.categorias);
            if(livroAtual.categorias){
                const _categoriasList = livroAtual.categorias.map((categoria) => ({
                    label: categoria.nome,
                    value: categoria.idCategoria
                }));
                console.log(_categoriasList)
                setSelectedCategorias(_categoriasList);
            }
        }
    }, [livroAtual]);

    useEffect(() => {
        if(categorias){
            const _categoriasList = categorias.map((categoria) => ({
                label: categoria.nome,
                value: categoria.idCategoria
            }));
            setCategoriasList(_categoriasList);
        }
    }, [categorias]);

    

    const livro = {
        id: 1,
        imagem: "https://m.media-amazon.com/images/I/71MuD6Hn8OL._AC_UF1000,1000_QL80_.jpg",
        titulo: "Diario de um banana",
        autor: "Carol, Caio, Flavio, Luiz, Vinicius, Yzhak",
        editora: "Livrelo",
        ano:'2025',
        status: "Disponivel"
    }

    

    const initialValues = {
        titulo: livroAtual ? livroAtual.nome : "",
        autor: livroAtual ? livroAtual.nomeAutor : "",
        descricao: livroAtual ? livroAtual.descricao :  "",
        editora: livroAtual ? livroAtual.nomeEditora : "",
        ano: livroAtual ? livroAtual.ano :  "",
        categorias: livroAtual ? livroAtual.categorias : []
    }

    const validationSchema = Yup.object({
            titulo: Yup.string()
                .required("O titulo é obrigatório"),
            autor: Yup.string()
                .required("O nome do autor é obrigatório"),
            descricao: Yup.string()
            .required("A descrição é obrigatória"),
            editora:  Yup.string()
            .required("O nome da editora é obrigatória"),    
            ano: Yup.date()
                .required("O ano de lançamento do livro é obrigatório.")
    });
    const handleSubmit = (values) => {
        values.ano = Number(values.ano);
        //alguma coisa
    };

    const handleChangeCategoria = (event) => {
        const { target: {value} } = event;
        setSelectedCategorias(typeof value === 'string' ? value.split(',') : value,)
    }
    
    const opcao =[
        "Ação",
        "Ficção",
        "Aventura",
        "Romance"
    ]
        const theme = createTheme({
            palette: {
              blues: {
                main: '#2a4fa0',
                light: '#162E62',
                dark: '#112757',
                contrastText: '#ffffff',
              },
              whites: {
                main: '#162E62',
                dark: '#fffffff',
                light: '#ffffff',
                contrastText: '#162E62',
              },
              reds: {
                main: '#ec1a1a',
                dark: '#cf2f2f',
                light: '#ec6262',
                contrastText: '#f5f5f5',
            },
            },
          });

    return(
        <>
            <NavbarB/>
            {livroAtual && (
                <div className="container_updateLivro">
                    <div className="box-info-livro">
                            <span className="box-info-title"> Detalhes do Livro</span>
                            <div className="info-livro-update">
                            <div className="info-livro-update-l">
                                <div className="status_book">
                                <span>Status: <span style={{color, marginBottom:"-2px"}}>{livroAtual.status}</span></span>
                                </div>
                                    <img className = "imgLivro" src={require(`../../../../../backend/uploads/${livroAtual.livroImage}`)} alt="imgLivro" />
                                    <span className="nomeLivro">{livroAtual.titulo}</span>
                                    <Box component="div" className='btn-delete-div' sx={{ '& > :not(style)': { m: 1, ml:"10%" } }} 
                                    marginX={"6%"}
                                    marginY={"5%"}
                                    >  
                                        <ThemeProvider theme={theme}>
                                            <Button  variant="contained" color="reds" size='large'>Excluir Livro</Button>
                                        </ThemeProvider>
                                    </Box>
                                </div>
                                <Box className="info-livro-update-r">
                                    <Formik 
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                    >
                                        {({isValid, dirty, values})=>(
                                            <Form>
                                                <Input
                                                    name="titulo"
                                                    label="Título"
                                                    placeholder="Digite o Título do livro"
                                                    type='text'
                                                />
                                                <Input
                                                    name="autor"
                                                    label="Autor"
                                                    placeholder="Digite o nome do autor do livro"
                                                    type='text'
                                                />
                                                <Input
                                                    name="descricao"
                                                    label="Descrição"
                                                    placeholder="Digite a descrição do livro"
                                                    type='text'
                                                />
                                                <Input
                                                    name="ano"
                                                    label="Ano"
                                                    placeholder="Digite o ano de lançamento do livro"
                                                    type='text'
                                                />
                                                <Input
                                                    name="editora"
                                                    label="Editora"
                                                    placeholder="Digite a editora do livro"
                                                    type='text'
                                                />
                                                <SelectInput value={selectedCategorias} onChange={handleChangeCategoria} label={"Categorias"} opcao={categoriasList} labelHelp={"Selecione a categoria mais adequada"}/>
                                                    <ThemeProvider theme={theme}>
                                                        <Button className='btn-form-update-livro' variant="contained" color="blues" size='large' 
                                                            disabled={!isValid || !dirty}
                                                        >Atualizar</Button>
                                                    </ThemeProvider>
                                            </Form>
                                        )}
                                    </Formik>
                                </Box> 

                            </div>
                    </div>

                </div>
            )}
        </>
    )
}

export default UpdateLivro;