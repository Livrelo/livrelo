import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import "./styles.css";

export default function ModalRenovacao({ open, handleClose, idEmprestimo }) {
    const initialValues = {
        newDataFim: "",
        idEmprestimo: idEmprestimo || "", //pra receber o id do emprestimo vindo da tabela
    };

    const validationSchema = Yup.object({
        newDataFim: Yup.date().required("A data final é obrigatória.")
        .min(new Date(new Date().setHours(0, 0, 0, 0)), "A data final não pode ser anterior à data de hoje."),

    });

    const handleSubmit = (values, { resetForm }) => {
        resetForm();
        handleClose();
        //logica de update emprestimo
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
                                label="Nova "
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                required
                            />
                            <Input
                                name="idEmprestimo"
                                label="ID do Empréstimo"
                                value={idEmprestimo}
                                disabled
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
