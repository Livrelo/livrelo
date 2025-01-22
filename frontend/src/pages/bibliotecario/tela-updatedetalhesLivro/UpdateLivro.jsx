import * as React from 'react';
import NavbarB from "../../../components/navbar-bib/NavbarB.jsx"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '../../.././components/Input/Input.jsx'
import './style.css'


function UpdateLivro(){
    const livro = {
        id: 1,
        imagem: "https://m.media-amazon.com/images/I/71MuD6Hn8OL._AC_UF1000,1000_QL80_.jpg",
        titulo: "Diario de um banana",
        autor: "Carol, Caio, Flavio, Luiz, Vinicius, Yzhak",
        editora: "Livrelo",
        ano:'2025',
        status: "Disponivel"
    }
     const st = livro.status;
     let color = "green";
        if (st === "Indisponível") color = "red";
              
    const inpt = [
        {label:"Título"},
        {label:"Descrição"},
        {label:"Autor"},
        {label:"Ano"},
        {label:"Editora"}]


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
            <div className="container_updateLivro">
                <div className="box-info-livro">
                         <span className="box-info-title"> Detalhes do Livro</span>
                        <div className="info-livro-update">
                          <div className="info-livro-update-l">
                            <div className="status_book">
                              <span>Status: <span style={{color, marginBottom:"-2px"}}>{livro.status}</span></span>
                            </div>
                                <img className = "imgLivro" src={livro.imagem} alt="imgLivro" />
                                <span className="nomeLivro">{livro.titulo}</span>
                                <Box component="div" className='btn-delete-div' sx={{ '& > :not(style)': { m: 1, ml:"10%" } }} 
                                marginX={"6%"}
                                marginY={"5%"}
                                >  
                                    <ThemeProvider theme={theme}>
                                        <Button  variant="contained" color="reds" size='large'>Excluir Livro</Button>
                                    </ThemeProvider>
                                </Box>
                            </div>
                            <form className="info-livro-update-r">
                              {inpt.map((input)=>(  <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '50ch' } }} noValidate autoComplete="off"
                                marginX={"5%"}
                                marginY={"2%"}
                                >   
                                    <ThemeProvider theme={theme}>
                                        <TextField id="outlined-basic" label={input.label} color='blues' variant="outlined" margin="normal"/>
                                    </ThemeProvider>
                                </Box>
                                ))}
                                <FormControl sx={{ m: 1, ml:"6.5%", minWidth: '50ch' }}>
                                    <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    // value={}
                                    label="Categoria"
                                    // onChange={}
                                    >
                                    <MenuItem value="">
                                        <em>Nenhuma</em>
                                    </MenuItem>
                                    <MenuItem value={"Ação"}>Ação</MenuItem>
                                    <MenuItem value={"Ficção"}>Ficção</MenuItem>
                                    <MenuItem value={"Aventura"}>Aventura</MenuItem>
                                    </Select>
                                    <FormHelperText>Selecione a categoria mais adequada</FormHelperText>
                                </FormControl>
                                <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '23ch' } }} noValidate autoComplete="off"
                                marginX={"30%"}
                                marginY={"2%"}
                                >  
                                    <ThemeProvider theme={theme}>
                                        <Button  variant="contained" color="blues" size='large'>Atualizar</Button>
                                    </ThemeProvider>
                                </Box>
                            </form> 

                        </div>
                </div>

            </div>
        </>
    )
}

export default UpdateLivro;