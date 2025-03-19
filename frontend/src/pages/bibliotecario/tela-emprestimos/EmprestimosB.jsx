import React, { useEffect, useState } from "react";
import Footer from "../../../components/footer/Footer";
import NavbarB from "../../../components/navbar-bib/NavbarB";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import TabelaEmprestimos from "../../../components/emprestimos-bib/TabelaEmprestimos";
import ModalEmprestimo from "../../../components/modal/ModalEmprestimo";
import useEmprestimoStore from "../../../zustand/emprestimo/emprestimo";
import "./styles.css";

export default function EmprestimosB() {
    const {emprestimos, fetchAllEmprestimos} = useEmprestimoStore();

    const [emprestimosState, setEmprestimosState] = useState();

    useEffect(()=>{
        fetchAllEmprestimos();
    },[])

    useEffect(()=>{
        const emprestimoArray =[];
        for(const emprestimo of emprestimos){
            const obj ={
                ...emprestimo,
                id: emprestimo.idEmprestimo
            }
            emprestimoArray.push(obj);
        }
        setEmprestimosState(emprestimoArray);
    },[emprestimos])

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
            <div className="page-content-emprestimos">
                <div className="emprestimos-header">
                    <h2 className="titulo">Empréstimos</h2>
                </div>
            
                <TabelaEmprestimos rows={emprestimosState} />
            </div>
            <Footer />
        </div>
    );
}
