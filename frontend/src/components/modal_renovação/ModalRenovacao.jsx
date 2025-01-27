import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";
import "./style.css";

function ModalRenovacao({open, onClose, idEmprestimo, dataFim}){
    const initialValues = {
        idEmprestimo: idEmprestimo || "",
        dataFim: dataFim || ""
    }


const validationSchema = Yup.object({
    idEmprestimo: Yup.number()
        .required("O Id do empréstimo é obrigatório"),
    dataFim: Yup.date()
        // .max("máximo de 14 dias de renovação")
        .required("A data de renovação é obrigatória")
        .min(new Date(new Date().setHours(0, 0, 0, 0)), "A data de devolução não pode ser anterior à data de hoje."),
})

const handleSubmit = (e,values, { resetForm }) => {
    e.preventDefault();
    console.log(values)
    console.log(open);
    console.log("oiiii");
    resetForm(); 
    // onClose();
};

    return(
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle className="Modal_title_renovacao"> Registre Renovação</DialogTitle>
            <Formik initialValues={initialValues} validationSchema={validationSchema}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}    
            >
                {({isValid, dirty})=>(
                    <Form>
                        <DialogContent>
                            <Input
                                name="dataFim"
                                label="Data de fim"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                required
                                // onChange={(e) => {setFieldValue("dataFim", e.target.value)}}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" onClick={onClose} className="btn_ModalRenovacao-cancelar">
                                Cancelar
                            </Button>
                            <Button variant="contained" type="submit" className="btn_ModalRenovacao-registrar"// disabled={!isValid || !dirty}
                            >
                                Registrar
                            </Button>
                        </DialogActions>
                    </Form>
                )}

            </Formik>
        </Dialog>

    )
}

export default ModalRenovacao;