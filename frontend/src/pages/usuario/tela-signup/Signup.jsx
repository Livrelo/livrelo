import * as React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header-signup/Header.jsx";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../../components/Input/Input";
import { Button, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextMaskCustom from "../../../components/Input/maskinput";
import img from "./bg.jpg";
import useUsuarioStore from "../../../zustand/usuario/usuario.js";
import { notify } from "../../../index.js";
import "./styleSignup.css";

function Signup() {
  const { createUsuario } = useUsuarioStore();
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      blues: {
        main: "#2a4fa0",
        light: "#162E62",
        dark: "#112757",
        contrastText: "#ffffff",
      },
      whites: {
        main: "#162E62",
        dark: "#fffffff",
        light: "#ffffff",
        contrastText: "#162E62",
      },
    },
  });

  const initialValues = {
    cpf: "",
    nome: "",
    email: "",
    senha: "",
  };

  const validationSchema = Yup.object({
    cpf: Yup.string()
      .required("O CPF é obrigatório.")
      .matches(/^.{14}$/, "O CPF deve ter 11 dígitos."),
    nome: Yup.string().required("O nome é obrigatório"),
    email: Yup.string()
      .required("O email é obrigatório.")
      .email("Coloque um email válido"),
    senha: Yup.string().required("A senha é obrigatória."),
  });

  const handleSubmit = async (values) => {
    try {
        // Para depuração: verifique os valores
     const response = await createUsuario({
        cpf: values.cpf,
        nome: values.nome,
        email: values.email,
        senha: values.senha,
      });
      console.log(response);
      // Notificação de sucesso
      notify("success", "Cadastro realizado com sucesso");

      // Navega para a tela de login
      navigate("/signin");
    } catch (error) {
      console.error(error); // Depuração
      // Notificação de erro
      // notify.show(error.message || "Erro ao cadastrar usuário", "error", 3000);
      notify("error", error.message);
    }
  };

  return (
    <div className="Signup">
      <Header />
      <div className="Signup-Container">
        <img src={img} alt="SignImg" className="SignImg" />
        <div className="wrap-form-SignUp">
          <Box className="Signup-form">
            <Typography variant="h6" className="tittle-SignUp">
              Cadastro
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit} // O Formik já gerencia o submit
            >
              {({ isValid, dirty }) => (
                <Form>
                  <Input
                    name="cpf"
                    label="CPF"
                    placeholder="Digite seu CPF"
                    type="text"
                    slotProps={{
                      input: {
                        inputComponent: TextMaskCustom,
                      },
                    }}
                    size="small"
                  />
                  <Input
                    name="nome"
                    label="nome"
                    placeholder="Digite seu nome"
                    type="text"
                    size="small"
                  />
                  <Input
                    name="email"
                    label="e-mail"
                    placeholder="Digite seu e-mail"
                    type="text"
                    size="small"
                  />
                  <Input
                    name="senha"
                    label="senha"
                    placeholder="Digite sua senha"
                    type="password" 
                    size="small"
                  />
                  <Box component="div" className="btn-signUp-div">
                    <ThemeProvider theme={theme}>
                      <Button
                        type="submit"
                        className="signUp-botao"
                        variant="contained"
                        color="blues"
                        size="large"
                        disabled={!isValid || !dirty}
                      >
                        Cadastrar
                      </Button>
                    </ThemeProvider>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
          <span className="label-ToSignIn">Já possui conta?</span>

          <Box component="div" className="btn-signUp-div">
            <ThemeProvider theme={theme}>
              <Button
                className="toSignIn-botao"
                variant="outlined"
                color="whites"
                size="large"
                onClick={() => navigate("/signin")}
              >
                Entrar
              </Button>
            </ThemeProvider>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Signup;
