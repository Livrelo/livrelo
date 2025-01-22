import Navbar from "../../../components/navbar/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import "./style.css"
import { TextField } from "@mui/material";
import { Box } from "@mui/material"


function UpdateUser() {

    const theme = createTheme({
        palette: {
            blues: {
                main: '#2a4fa0',
                light: '#162E62',
                dark: '#112757',
                contrastText: '#ffffff',
            },
            red: {
                main: '#fc40405e',
                light: '#f06e6e80',
                // dark: '#8f222294',
                contrastText: '#ff0000',
            }
        },
    });
    return (
        <>
            <Navbar />
            <div className="Container_Update_User">
                <div className="quadro_InputsText">
                    <span className="quadro_titulo"> dados de (Usuario)</span>
                    <form className="form-update">
                        <ThemeProvider theme={theme}>
                            <TextField className="input_update" id="outlined-basic" label="CPF" color='blues' variant="outlined" margin="normal" />
                        </ThemeProvider>
                        <ThemeProvider theme={theme}>
                            <TextField className="input_update" id="outlined-basic" label="Nome" color='blues' variant="outlined" margin="normal" />
                        </ThemeProvider>
                        <ThemeProvider theme={theme}>
                            <TextField className="input_update" id="outlined-basic" label="Email" color='blues' variant="outlined" margin="normal" />
                        </ThemeProvider>
                        <ThemeProvider theme={theme}>
                            <TextField className="input_update" id="outlined-basic" label="Senha" color='blues' variant="outlined" margin="normal" />
                        </ThemeProvider>
                        <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off"
                            marginX={32.5}
                            marginY={3}
                        >
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="blues" size='large'>Atualizar dados</Button>
                            </ThemeProvider>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="red" size='large'>Excluir perfil</Button>
                            </ThemeProvider>
                        </Box>
                    </form>

                </div>

            </div>
        </>
    )
}

export default UpdateUser;