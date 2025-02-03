import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../../components/Input/Input";
import { Button, Typography, Box } from "@mui/material";
import Navbar from "../../../components/navbar/Navbar";
import "./styles.css";
import Footer from "../../../components/footer/Footer";
import TextMaskCustom from "../../../components/Input/maskinput";
import { useNavigate, useParams } from "react-router-dom";
import useAuthStore from "../../../zustand/auth/auth";
import useLivrosStore from "../../../zustand/livro/livro";
import useReservaStore from "../../../zustand/reserva/reserva";


const calculatePrazo = (dataReserva) => {
    const data = new Date(dataReserva);
    data.setDate(data.getDate() + 2);
    return data.toISOString().split("T")[0]; 
};

export default function ReservarLivroYup() {
    const navigate = useNavigate();
    const { id } = useParams();

    const { conta } = useAuthStore();
    // const { usuario, fetchUsuarioByIdConta } = useUsuarioStore();
    const { livros } = useLivrosStore();
    const { createReserva, fetchReservasByCPF } = useReservaStore();

    //livro pra testarrrrrrrrrr dps colocar logica pra puxar do back
    // const livro = {
    //     titulo: "Harry Potter e a Pedra Filosofal",
    //     imagem: "https://m.media-amazon.com/images/I/41897yAI4LL._SY445_SX342_.jpg",
    // };

    const [ livroReservar, setLivro ] = useState();
    useEffect(() => {
        console.log(livros);
        console.log(id);
        const livroAchado = livros.find((item) => item.idLivro === Number(id));
        console.log(livroAchado)
        setLivro(livroAchado);
        // const user = async ()=>{
        //     await fetchUsuarioByIdConta(conta.idConta)
        // }
    }, [])

    const initialValues = {
        idLivro: id,
        dataReserva: "",
        dataFim: "",
        prazo: "",
        cpf: conta.cpf,
    };
    

    const validationSchema = Yup.object({
        CPF: Yup.string()
            .required("O CPF é obrigatório.")
            .matches(/^.{14}$/, "O CPF deve ter 11 dígitos."),
        dataReserva: Yup.date().required("A data de reserva é obrigatória.")
            .min(new Date(), "A data de retirada não pode ser no passado."),
        prazo: Yup.date()
            .min(
                Yup.ref("dataReserva"),
                
            )
            .required("A data de fim é obrigatória."),
        // dataRetirada: Yup.date()
        //     .required("A data de retirada é obrigatória.")
        //     .min(new Date(), "A data de retirada não pode ser no passado."),
    });
    
    const handleSubmit = async (values) => {
        console.log("submitou")
        try{
            await createReserva(values);
            await fetchReservasByCPF();
            navigate("/home");
        }catch(error){
            console.log(error);
        }
    };
    return (
        <div>
            <Navbar />
            {livroReservar && (

                <div className="content">
                    <div className="reservar-livro-container">
                        <Box className="livro-info">
                            <img
                                src={require(`./../../../../../backend/uploads/${livroReservar.livroImage}`)}
                                alt={`Capa do livro ${livroReservar.nome}`}
                                className="livro-imagem"
                            />
                            <Typography
                                variant="h6"
                                className="livro-titulo"
                            >
                                {livroReservar.nome}
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
                                onSubmit={handleSubmit}
                            >
                                {({ isValid, dirty, setFieldValue, values }) => (
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
                                        />
                                        <Input
                                            name="dataReserva"
                                            label="Data de reserva (retirada)"
                                            type="date"
                                            InputLabelProps={{ shrink: true }}
                                            required
                                            onChange={(e) => {
                                                const dataReserva = e.target.value;
                                                setFieldValue("dataReserva", dataReserva);
                                                if (dataReserva) {
                                                    const prazoCalculado = calculatePrazo(dataReserva);
                                                    setFieldValue("prazo", prazoCalculado);
                                                }
                                            }}
                                        />
                                        <Input
                                            name="prazo"
                                            label="Prazo para retirada"
                                            type="date"
                                            InputLabelProps={{ shrink: true }}
                                            value={values.prazo}
                                            required
                                            disabled
                                        />
                                        {/* <Input
                                            name="dataRetirada"
                                            label="Data de Retirada"
                                            type="date"
                                            InputLabelProps={{
                                                shrink: true, 
                                            }}
                                            
                                        /> */}

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            disabled={livroReservar.status !== 'Disponivel'}
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
            )}
            <Footer />
        </div>
    );
}
