import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import useDevolucaoStore from "../../zustand/devolucao/devolucao";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function ModalDevolucao({ open, handleClose, idEmprestimo }) {
    const initialValues = {
        dataDevolucao: "",
        idEmprestimo: idEmprestimo || "", //pra receber o id do emprestimo vindo da tabela
    };

    const {createDevolucao} = useDevolucaoStore();
    const navigate = useNavigate();
        

    const validationSchema = Yup.object({
        dataDevolucao: Yup.date().required("A data de devolução é obrigatória.")
        .min(new Date(new Date().setHours(0, 0, 0, 0)), "A data de devolução não pode ser anterior à data de hoje."),

    });

    const handleSubmit = async(values, { resetForm }) => {
        try{
            await createDevolucao(values.idEmprestimo, values.dataDevolucao)
            navigate("/home-b")
        }catch(erro){
            console.error(erro)
        }
        resetForm();
        handleClose();
        //logica de create devolucao
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle className="titulo">Registrar Devolução</DialogTitle>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isValid, dirty }) => (
                    <Form>
                        <DialogContent>
                            <Input
                                name="dataDevolucao"
                                label="Data de Devolução"
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
