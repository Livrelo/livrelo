import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../../../components/header-signup/Header.jsx"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Form } from "formik";
import Input from '../../../components/Input/Input.jsx';
import * as Yup from "yup";
import img from './bg.jpg';
import "./styleSignup.css"

function Signup() {
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

    const initialValues = {
        CPF: "",
        nome: "",
        email: "",
        senha: "",
    };
    const validationSchema = Yup.object({
        CPF: Yup.string()
            .required("O CPF é obrigatório.")
            .matches(/^\d{11}$/, "O CPF deve ter 11 dígitos."),
        nome: Yup.string()
            .required("O nome é obrigatório."),
        email: Yup.string().email("Digite um e-mail válido")
            .required("O email é obrigatório."),
        senha: Yup.string()
            .required("A senha é obrigatório."),

    });

    const handleSubmit = (values) => {
        //alguma coisa
    };

    return (
        <div className='Signup'>
            <Header />
            <div className='Signup-Container'>
                <img src={img} alt='SignImg' className='SignImg'></img>
                <div className="wrap-form-SignUp">
                    <form className="Signup-form">
                        <span className="tittle-SignUp">Cadastro</span>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isValid, dirty }) => (
                                <Form>
                                    <Input
                                        name="CPF"
                                        label="CPF"
                                        placeholder="Digite seu CPF"
                                    />
                                    <Input
                                        name="nome"
                                        label="Nome"
                                        placeholder="Digite seu nome"

                                    />
                                    <Input
                                        name="email"
                                        label="E-mail"
                                        placeholder="Digite seu e-mail"

                                    />
                                    <Input
                                        name="senha"
                                        label="Senha"
                                        placeholder="Digite sua senha"
                                        type="password"

                                    />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        disabled={!isValid || !dirty}
                                        className="reservar-livro-button"
                                    >
                                        Cadastrar
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                        <span className="label-SignIn">Já possui conta?</span>

                        <Box component="div" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} noValidate autoComplete="off"
                            marginX={32.5}
                            marginY={0}
                        >
                            <ThemeProvider theme={theme}>
                                <Button variant="outlined" color="whites" size='large' onClick={() => navigate("/signin")}>Entrar</Button>
                            </ThemeProvider>
                        </Box>
                    </form>
                </div>

            </div>
        </div>
    );
}
export default Signup;