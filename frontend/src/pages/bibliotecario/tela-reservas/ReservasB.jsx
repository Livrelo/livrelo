import React, { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import NavbarB from "../../../components/navbar-bib/NavbarB";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ModalReserva from "../../../components/modal/ModalReserva";
import "./styles.css";
import TabelaReservas from "../../../components/reservas-bib/TabelaReservas";
import useReservaStore from "../../../zustand/reserva/reserva";

export default function ReservasB() {

    const { reservas, fetchReservas } = useReservaStore();

    const [reservasRows, setReservaRows] = useState();


    useEffect(() => {
        fetchReservas();
    }, [])

    useEffect(() => {
        console.log(reservas);
        const reservasArray = []
        for(const reserva of reservas){
            const reservaObj = {
                ...reserva,
                id: reserva.idReserva
            }
            reservasArray.push(reservaObj);
        }
        setReservaRows(reservasArray);
    }, [reservas])

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <NavbarB />
            <div className="page-content-reservas">
                <div className="emprestimos-header">
                    <h2 className="titulo">Reservas</h2>
                    
                </div>
                <TabelaReservas rows={reservasRows} />
            </div>
            <Footer />
            <ModalReserva open={openModal} handleClose={handleCloseModal} />
        </div>
    );
}
