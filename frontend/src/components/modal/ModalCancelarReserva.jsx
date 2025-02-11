import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import "./styles.css";
import { useNavigate } from "react-router-dom";
import useReservaStore from "../../zustand/reserva/reserva";



export default function ModalCancelarReserva({ open, handleClose, idReserva, titulo }) {
    const initialValues = {
        titulo: titulo || "",
        idReserva: idReserva || "",
    };
    const navigate = useNavigate();
    const { cancelReserva, fetchReservasByCPF } = useReservaStore();



    const handleSubmit = async () => {
    try{
        await cancelReserva(idReserva);
        await fetchReservasByCPF();
        navigate("/home");
    }catch(error){
        console.log(error);
    } finally{
        handleClose();
    }
        //cancela reserva utilizando o id da reserva passado pelo cardddd
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth initialValues={initialValues}
            onSubmit={handleSubmit}>
            <DialogTitle className="titulo">Cancelar reserva</DialogTitle>
            <DialogContent>
                <Typography className="livro-reservado-titulo">
                    Tem certeza que deseja cancelar a reserva do livro {titulo}?
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} className="btn-cancelar">
                    Voltar
                </Button>
                <Button
                    onClick={handleSubmit}
                    type="submit"
                    className="btn-registrar"

                >
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog >
    );
}
