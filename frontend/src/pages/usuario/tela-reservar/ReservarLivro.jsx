import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../../components/Input/Input";
import { Button, Typography, Box } from "@mui/material";
import Navbar from "../../../components/navbar/Navbar";
import "./styles.css";
import Footer from "../../../components/footer/Footer";
import TextMaskCustom from "../../../components/maskinput/maskinput";

export default function ReservarLivroYup() {
    //livro pra testarrrrrrrrrr dps colocar logica pra puxar do back
    const livro = {
        titulo: "Harry Potter e a Pedra Filosofal",
        imagem: "https://m.media-amazon.com/images/I/41897yAI4LL._SY445_SX342_.jpg",
    };

    const initialValues = {
        CPF: "",
        dataRetirada: "",
    };

    const validationSchema = Yup.object({
        CPF: Yup.string()
            .required("O CPF é obrigatório.")
            .matches(/^.{14}$/, "O CPF deve ter 11 dígitos."),
        dataRetirada: Yup.date()
            .required("A data de retirada é obrigatória.")
            .min(new Date(), "A data de retirada não pode ser no passado."),
    });
    const handleSubmit = (values) => {
        console.log(values)
    };
    return (
        <div>
            <Navbar />
            <div className="content">
                <div className="reservar-livro-container">
                    <Box className="livro-info">
                        <img
                            src={livro.imagem}
                            alt={`Capa do livro ${livro.titulo}`}
                            className="livro-imagem"
                        />
                        <Typography
                            variant="h6"
                            className="livro-titulo"
                        >
                            {livro.titulo}
                        </Typography>
                    </Box>
                    <Box className="formulario-container">
                        <Typography
                            variant="h4"
                            className="titulo-reservar"
                        >
                            Reservar Livro
                        </Typography>
                        <Formik
                            initialValues={{...initialValues }}
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
                                    />
                                    <Input
                                        name="dataRetirada"
                                        label="Data de Retirada"
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true, 
                                        }}
                                        
                                    />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        disabled={!isValid || !dirty}
                                        className="reservar-livro-button"
                                    >
                                        Reservar Livro
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </div>
            </div>
            <Footer />
        </div>
    );
}
