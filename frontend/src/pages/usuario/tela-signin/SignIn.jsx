import * as React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header-signup/Header.jsx";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../../components/Input/Input";
import { Button, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import img from "./bg.jpg";
import "./styleSignin.css";

function SignIn() {
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
          email: "",
          senha: "",
      };
  
      const validationSchema = Yup.object({
          email: Yup.string()
              .required("O email é obrigatório.")
              .email("Coloque um email válido"),
          senha: Yup.string()
              .required("A senha é obrigatória.")
      });
      const handleSubmit = (values) => {
          console.log(values)
      };
  const navigate = useNavigate();
  return (
    <div className="Sign">
      <Header />
      <div className="Sign-Container">
        <img src={img} alt="SignImg" className="SignImg"></img>
        <div className="wrap-form-SignIn">
          <Box className="login-form">
            <Typography variant="h6" className="tittle-SignIn">Entrar</Typography>
            <Formik
              initialValues={{ ...initialValues }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({ isValid, dirty }) => (
                <Form>
                  <Input
                    name="email"
                    label="e-mail"
                    placeholder="Digite seu e-mail"
                    type="text"
                  />
                  <Input
                    name="senha"
                    label="senha"
                    placeholder="Digite sua senha"
                    type="text"
                  />
                  <Box
                    component="div"
                    className="btn-signIn-div"
                  >
                    <ThemeProvider theme={theme}>
                      <Button className="signIn-botao"variant="contained" color="blues" size="large" disabled={!isValid || !dirty}>
                        Entrar
                      </Button>
                    </ThemeProvider>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>

          <span className="label-ToSignUp">Ainda não possui conta?</span>

          <Box
            component="div"
            className="btn-signIn-div"
          >
            <ThemeProvider theme={theme}>
              <Button
                className="toSignUp-botao"
                variant="outlined"
                color="whites"
                size="large"
                onClick={() => navigate("/signup")}
              >
                Cadastre-se
              </Button>
            </ThemeProvider>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
