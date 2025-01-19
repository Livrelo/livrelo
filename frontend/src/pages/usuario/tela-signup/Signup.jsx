import * as React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from "../../../components/header-signup/Header.jsx"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';  
import img from './bg.jpg';
import "./styleSignup.css"

function Signup(){
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
        },
      });
      const navigate = useNavigate(); 
 return(  
    <div className='Signup'>
        <Header/>
            <div className='Signup-Container'>
            <img src={img} alt='SignImg'className='SignImg'></img>
                <div className="wrap-form-SignUp">
                    <form className="Signup-form">
                        <span className="tittle-SignUp">Cadastro</span>
                        <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '75ch' } }} noValidate autoComplete="off"
                        marginX={8}
                        marginY={1}
                        >
                            <ThemeProvider theme={theme}>
                                <TextField id="outlined-basic" label="CPF" color='blues'  variant="outlined" margin="normal" />
                            </ThemeProvider>
                            
                        </Box>
                        <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '75ch' } }} noValidate autoComplete="off"
                        marginX={8}
                        marginY={1}
                        >   
                            <ThemeProvider theme={theme}>
                                <TextField id="outlined-basic" label="Nome" color='blues' variant="outlined" margin="normal"/>
                            </ThemeProvider>
                        </Box>
                        <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '75ch' } }} noValidate autoComplete="off"
                        marginX={8}
                        marginY={1}
                        >
                            <ThemeProvider theme={theme}>
                                <TextField id="outlined-basic" label="E-mail" color='blues'  variant="outlined" margin="normal" />
                            </ThemeProvider>
                            
                        </Box>
                        <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '75ch' } }} noValidate autoComplete="off"
                        marginX={8}
                        marginY={1}
                        >   
                            <ThemeProvider theme={theme}>
                                <TextField id="outlined-basic" label="Senha" color='blues' variant="outlined" margin="normal"/>
                            </ThemeProvider>
                        </Box>
                        <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '30ch' } }} noValidate autoComplete="off"
                        marginX={30}
                        marginY={5}
                        >   
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="blues" size='large'>Cadastrar</Button>
                            </ThemeProvider>
                        </Box>

                        <span className="label-SignIn">Já possui conta?</span>  

                        <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off"
                        marginX={32.5}
                        marginY={0}
                        >   
                            <ThemeProvider theme={theme}>
                                <Button variant="outlined" color="whites" size='large'onClick={()=>navigate("/signin")}>Entrar</Button>
                            </ThemeProvider>
                        </Box> 
                    </form>
                </div>

            </div>
    </div>
 );
}
export default Signup;