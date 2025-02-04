import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import "./styles.css";

export default function ModalRenovacao({ open, handleClose, idEmprestimo, dataFim }) {
    const initialValues = {
        newDataFim: "",
        idEmprestimo: idEmprestimo || "",
        dataFim: dataFim || "",
    };

    const validationSchema = Yup.object({
        newDataFim: Yup.date().required("A data de renovação é obrigatória.")
            .min(new Date(new Date().setHours(0, 0, 0, 0)), "A data de renovação não pode ser anterior à data de hoje."),

    });

    //na logica de att o emprestimo, inserir o idEmprestimo nessa funcao. o card ja esta pegando e o modal tb, entao funciona
    const handleSubmit = (values, { resetForm }) => {
        resetForm();
        handleClose();
        //logica de renovar (update emprestimo)
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle className="titulo">Renovar Empréstimo</DialogTitle>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isValid, dirty }) => (
                    <Form>
                        <DialogContent>
                            <Input
                                name="newDataFim"
                                label="Nova data fim"
                                type="date"
                                InputLabelProps={{ shrink: true }}
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
                                Renovar
                            </Button>
                        </DialogActions>
                    </Form>
                )}
            </Formik>
        </Dialog>
    );
}
