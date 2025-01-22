import {useState}from "react";
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
import "./style.css"

function RegisterLivro(){
    const [img, setImg] = useState("");
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

    async function handleImageChange(event) {
        const inputFile = document.querySelector("#ft_input");
        const pictureImage = document.querySelector(".ft_image");
        const pictureImgTxt = "Escolha uma imagem";
    
        if (!inputFile || !pictureImage) {
          throw new Error(
            "DOM elements not found. Ensure #ft_input and .ft_image exist."
          );
        }
    
        const file = event.target.files[0];
        setImg(file);
    
        if (file) {
          const reader = new FileReader();
    
          try {
            const imageData = await new Promise((resolve, reject) => {
              reader.addEventListener("load", () => resolve(reader.result));
              reader.addEventListener("error", reject);
              reader.readAsDataURL(file);
            });
    
            pictureImage.innerHTML = ""; //limpa a imagem usada anteriormente
            const img = document.createElement("img");
            img.src = imageData;
            img.classList.add("ft_img");
            pictureImage.appendChild(img);
      
          } catch (error) {
            console.error("Error loading image:", error);
            pictureImage.innerHTML = pictureImgTxt; // mostra um erro caso ocorra
          }
        } else {
          pictureImage.innerHTML = pictureImgTxt;
        }
        inputFile.addEventListener("change", handleImageChange);
      }
    return(
        <>
            <NavbarB/>
            <div className="container_createLivro">
                <div className="box-cadastro-livro">
                         <span className="box-cadastro-title"> Cadastro do Livro</span>
                        <div className="cadastro-livro-create">
                          <div className="cadastro-livro-create-l">
                                <label className="ft" for="ft_input" tabIndex={0}>
                                <span className="ft_image">Escolha uma imagem</span>
                                </label>
                                <input
                                    className="ft_input"
                                    id="ft_input"
                                    name="file"
                                    type="file"
                                    accept="image/"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <form className="cadastro-livro-create-r">
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
                                <Box component="div" className="btn-create-div" sx={{ '& > :not(style)': { ml: "-10%"} }} noValidate autoComplete="off"
                                marginX={"30%"}
                                marginY={"2%"}
                                >  
                                    <ThemeProvider theme={theme}>
                                        <Button  variant="contained" color="blues" size='large'>Cadastrar Livro</Button>
                                    </ThemeProvider>
                                </Box>
                            </form> 

                        </div>
                </div>

            </div>
        </>
    )
}

export default RegisterLivro;