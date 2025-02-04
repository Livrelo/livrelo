import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import TextMaskCustom from "../Input/maskinput";
import useReservaStore from "../../zustand/reserva/reserva";
import "./styles.css";
import useAuthStore from "../../zustand/auth/auth";
import { useNavigate } from "react-router-dom";

//prazo 2 dias apos a retirada
const calculatePrazo = (dataReserva) => {
    const data = new Date(dataReserva);
    data.setDate(data.getDate() + 2);
    return data.toISOString().split("T")[0]; 
};

export default function ModalReserva({ open, handleClose , idLivro, cpf}) {
    const { token } = useAuthStore();
    const navigate = useNavigate();
    
    const { createReserva } = useReservaStore();

    const initialValues = {
        idLivro: idLivro || "",
        dataReserva: "",
        dataFim: "",
        prazo: "",
        cpf: cpf,
    };

    const validationSchema = Yup.object({
        // idLivro: Yup.number().required("O ID do livro é obrigatório."),
        dataReserva: Yup.date().required("A data de reserva é obrigatória."),
        prazo: Yup.date()
            .min(
                Yup.ref("dataReserva"),
                
            )
            .required("A data de fim é obrigatória."),
        cpf: Yup.string()
            .required("O CPF é obrigatório.")
            .matches(/^.{14}$/, "O CPF deve ter 11 dígitos."),

    });

    const handleSubmit = async (values, { resetForm }) => {
        try{
            await createReserva(values);
            navigate("/home");
        }catch(error){
            console.log(error);
        }
        resetForm(); 
        handleClose();
        //registra reserva
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle className="titulo">Registrar Reserva</DialogTitle>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isValid, dirty, setFieldValue, values }) => (
                    <Form>
                        <DialogContent>
                        <Input
                                name="idLivro"
                                label="ID do Livro"
                                placeholder="Digite o ID do Livro"
                                required
                                disabled={!!initialValues.idLivro}
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
                            <Input
                                name="cpf"
                                label="CPF"
                                InputProps={{
                                    inputComponent: TextMaskCustom,
                                }}
                                required
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} className="btn-cancelar">
                                Cancelar
                            </Button>
                            <Button
                                type="submit"
                                disabled={!isValid || !dirty}
                                className="btn-registrar"
                            >
                                Registrar
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </Dialog>
    );
}
