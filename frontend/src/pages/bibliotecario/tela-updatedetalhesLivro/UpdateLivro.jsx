import * as React from 'react';
import { useEffect, useState } from 'react';
import { Formik, Form } from "formik";
import NavbarB from "../../../components/navbar-bib/NavbarB.jsx"
import * as Yup from "yup";
import Input from "../../../components/Input/Input";
import {Box, Button, createTheme,Select,ThemeProvider, typographyClasses} from '@mui/material/';
import SelectInput from '../../../components/SelectInput/Select.jsx';
import './style.css'
import { useNavigate, useParams } from 'react-router-dom';
import useLivrosStore from '../../../zustand/livro/livro.js';
import useCategoriaStore from '../../../zustand/categoria/categoria.js';
import { compareCategorias } from '../../../utils/compareCategorias.js';
import useLivroCategoriaStore from '../../../zustand/livroCategoria/livroCategoria.js';


function UpdateLivro(){

    const navigate = useNavigate();
    const {id} = useParams();

    const { livros, deleteLivro, updateLivro } = useLivrosStore();
    const { categorias } = useCategoriaStore();
    const { deleteByIdCategoria, createLivroCategoria } = useLivroCategoriaStore();

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
        const livro = livros.find((livro) => livro.idLivro === Number(id));
        console.log(livro);

        setLivroAtual(livro);
        if(livro.status !== "Disponivel"){
            setColor("red");
        } else{
            setColor("green");
        }

    }, [livros]);

    useEffect(() => {
        if(livroAtual){
            if(initialCategoriasList.length === 0) {
                const _initialCategoriaList = livroAtual.categorias.map((categoria) => categoria.idCategoria);
                setInitialCategoriasList(_initialCategoriaList);
            }

            if(livroAtual.categorias){
                const _categoriasList = livroAtual.categorias.map((categoria) => categoria.idCategoria);
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
        nome: livroAtual ? livroAtual.nome : "",
        nomeAutor: livroAtual ? livroAtual.nomeAutor : "",
        descricao: livroAtual ? livroAtual.descricao :  "",
        nomeEditora: livroAtual ? livroAtual.nomeEditora : "",
        ano: livroAtual ? livroAtual.ano :  "",
        categorias: livroAtual ? livroAtual.categorias : []
    }

    const validationSchema = Yup.object({
            nome: Yup.string()
                .required("O titulo é obrigatório"),
            nomeAutor: Yup.string()
                .required("O nome do autor é obrigatório"),
            descricao: Yup.string()
            .required("A descrição é obrigatória"),
            nomeEditora:  Yup.string()
            .required("O nome da editora é obrigatória"),    
            ano: Yup.date()
                .required("O ano de lançamento do livro é obrigatório.")
    });
    const handleUpdate = async (values) => {
        try{
            console.log(values);
            console.log(values.ano);
            const { categorias, ...rest } = values;
            console.log(rest);
            await updateLivro(id, rest);

            const { removed, added } = compareCategorias(initialCategoriasList, selectedCategorias);
            for(const rem of removed){
                await deleteByIdCategoria(rem)
            }

            for(const add of added){
                await createLivroCategoria(id, add);
            }

            console.log(selectedCategorias)
            console.log(initialCategoriasList)
            //alguma coisa
        }catch(error){
            console.log(error);
        }
    };

    const handleChangeCategoria = (event) => {
        const { target: {value} } = event;
        setSelectedCategorias(typeof value === 'string' ? value.split(',') : value,)
        console.log(value);
        console.log(selectedCategorias);
    }
    useEffect(() => {
        console.log(selectedCategorias)
    }, [selectedCategorias])

    const handleDelete = async () => {
        try{
            await deleteLivro(id);
            navigate("/acervo-b");
        }catch(error){
            console.log(error);
        }
    }
    
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
                                        {livroAtual.status === "Disponivel" && (
                                            <ThemeProvider theme={theme}>
                                                <Button onClick={handleDelete} variant="contained" color="reds" size='large'>Excluir Livro</Button>
                                            </ThemeProvider>
                                        )}
                                    </Box>
                                </div>
                                <Box className="info-livro-update-r">
                                    <Formik 
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={handleUpdate}
                                    >
                                        {({isValid, dirty, values})=>(
                                            <Form>
                                                <Input
                                                    name="nome"
                                                    label="Título"
                                                    placeholder="Digite o Título do livro"
                                                    type='text'
                                                />
                                                <Input
                                                    name="nomeAutor"
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
                                                    name="nomeEditora"
                                                    label="Editora"
                                                    placeholder="Digite a editora do livro"
                                                    type='text'
                                                />
                                                <SelectInput value={selectedCategorias} onChange={handleChangeCategoria} label={"Categorias"} opcao={categoriasList} labelHelp={"Selecione a categoria mais adequada"}/>
                                                    <ThemeProvider theme={theme}>
                                                        <Button  disabled={livroAtual.status === "Deletado"} type='submit' className='btn-form-update-livro' variant="contained" color="blues" size='large'>
                                                            Atualizar
                                                        </Button>
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