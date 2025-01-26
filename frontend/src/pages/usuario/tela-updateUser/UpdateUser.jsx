import Navbar from "../../../components/navbar/Navbar";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../../components/Input/Input";
import { Button, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextMaskCustom from "../../../components/Input/maskinput";
import "./style.css";
import Footer from "../../../components/footer/Footer";

function UpdateUser() {
  const theme = createTheme({
    palette: {
      blues: {
        main: "#2a4fa0",
        light: "#162E62",
        dark: "#112757",
        contrastText: "#ffffff",
      },
      red: {
        main: "#fc40405e",
        light: "#f06e6e80",
        // dark: '#8f222294',
        contrastText: "#ff0000",
      },
    },
  });

  const initialValues = {
    CPF: "",
    nome: "",
    email: "",
    senha: "",
  };

  const validationSchema = Yup.object({
    CPF: Yup.string()
      .required("O CPF é obrigatório.")
      .matches(/^.{14}$/, "O CPF deve ter 11 dígitos."),
    nome: Yup.string().required("O nome é obrigatório"),
    email: Yup.string()
      .required("O email é obrigatório.")
      .email("Coloque um email válido"),
    senha: Yup.string().required("A senha é obrigatória."),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <Navbar />
      <div className="Container_Update_User">
            <div className="quadro_InputsText">
                <span className="quadro_titulo"> dados de (Usuario)</span>
                <Box className="form-update">
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
                            name="CPF"
                            label="CPF"
                            placeholder="Digite seu CPF"
                            type="text"
                            slotProps={{
                            input: {
                                inputComponent: TextMaskCustom,
                            },
                            }}
                            size="large"
                        />
                        <Input
                            name="nome"
                            label="nome"
                            placeholder="Digite seu nome"
                            type="text"
                            size="large"
                        />
                        <Input
                            name="email"
                            label="e-mail"
                            placeholder="Digite seu e-mail"
                            type="text"
                            size="large"
                        />
                        <Input
                            name="senha"
                            label="senha"
                            placeholder="Digite sua senha"
                            type="text"
                            size="large"
                        />
                        <Box component="div" className="btn_update-user_div">
                            <ThemeProvider theme={theme}>
                            <Button
                                className="btn_update-user"
                                variant="contained"
                                color="blues"
                                size="large"
                            >
                                Atualizar dados
                            </Button>
                            </ThemeProvider>
                            <ThemeProvider theme={theme}>
                            <Button
                                className="btn_delete-user"
                                variant="contained"
                                color="red"
                                size="large"
                            >
                                Excluir perfil
                            </Button>
                            </ThemeProvider>
                        </Box>
                        </Form>
                    )}
                    </Formik>
                </Box>
            </div>
        </div>
        <Footer/>
    </>
  );
}

export default UpdateUser;
