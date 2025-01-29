import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import TextMaskCustom from "../Input/maskinput";
import "./styles.css";

//data fim 14 dias apos o inicio do emprestimo
const calculateDataFim = (dataInicio) => {
    const data = new Date(dataInicio);
    data.setDate(data.getDate() + 14);
    return data.toISOString().split("T")[0]; 
};

export default function ModalEmprestimo({ open, handleClose, idReserva, idLivro }) {
    const initialValues = {
        idLivro: idLivro ||"",
        dataInicio: "",
        dataFim: "",
        cpf: "",
        idReserva: idReserva || "",
    };

    const validationSchema = Yup.object({
        idLivro: Yup.number().required("O ID do livro é obrigatório."),
        dataInicio: Yup.date().required("A data de início é obrigatória."),
        dataFim: Yup.date()
            .min(
                Yup.ref("dataInicio"),
                "A data de fim deve ser posterior à data de início."
            )
            .min(new Date(new Date().setHours(0, 0, 0, 0)), "A data de devolução não pode ser anterior à data de hoje.")
            .required("A data de fim é obrigatória."),
        cpf: Yup.string()
            .required("O CPF é obrigatório.")
            .matches(/^.{14}$/, "O CPF deve ter 11 dígitos."),
        idReserva: Yup.number(),
    });

    const handleSubmit = (values, { resetForm }) => {
        resetForm(); 
        handleClose();
        //registra emprestimo
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle className="titulo">Registrar Empréstimo</DialogTitle>
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
                                name="dataInicio"
                                label="Data de Início"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                required
                                onChange={(e) => {
                                    const dataInicio = e.target.value;
                                    setFieldValue("dataInicio", dataInicio);
                                    if (dataInicio) {
                                        const dataFimCalculada = calculateDataFim(dataInicio);
                                        setFieldValue("dataFim", dataFimCalculada);
                                    }
                                }}
                            />
                            <Input
                                name="dataFim"
                                label="Data de Fim"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                value={values.dataFim}
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
                            <Input
                                name="idReserva"
                                label="ID da Reserva"
                                placeholder="Digite o ID da Reserva (opcional)"
                                disabled={!!initialValues.idReserva}
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
