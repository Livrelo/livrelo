import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import DashboardCard from "../../../components/dashboard-bib/DashboardCard";
import { useNavigate } from "react-router-dom";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BookIcon from "@mui/icons-material/Book";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ErrorIcon from "@mui/icons-material/Error";
import NavbarB from "../../../components/navbar-bib/NavbarB";
import Footer from "../../../components/footer/Footer";
import useEmprestimoStore from "../../../zustand/emprestimo/emprestimo";
import useLivrosStore from "../../../zustand/livro/livro";
import useReservaStore from "../../../zustand/reserva/reserva";
import "./styles.css";

export default function HomeB() {
    const navigate = useNavigate();
    const handleNavigation = (route, filtrarAtrasados = false) => {
        navigate(route, { state: { filtrarAtrasados } });
    };

    const { livros, fetchLivros } = useLivrosStore();
    const { reservas, fetchReservas } = useReservaStore();
    const { emprestimos, emprestimosAtrasados, fetchEmprestimosEmAtraso, fetchAllEmprestimos } = useEmprestimoStore();

    const [livrosCount, setLivrosCount] = useState();
    const [reservasCount, setReservasCount] = useState();
    const [emprestimosCount, setEmprestimosCount] = useState();
    const [pendentesCount, setPendentesCount] = useState();

    //att contagens
    // useEffect(() => {
        
    //     console.log({livros});
    // }, [livros, reservas, emprestimos]);

    useEffect(() => {
        fetchLivros();
        setLivrosCount(livros.length);
        // if(reservas.lenght == undefined){
        //     setReservasCount(1);
        // }
        // if(emprestimos.lenght ==undefined){
        //     setEmprestimosCount(1);
        // }
    }, []);

    //reservas 
    useEffect(() => {
        fetchReservas();
        setReservasCount(reservas.length);
        console.log("reservas: "+ JSON.stringify(useReservaStore.getState().reservas, null, 2))
    }, [])
    //emprestimos
    useEffect(() => {
        fetchAllEmprestimos();
        setEmprestimosCount(emprestimos.length);
        console.log("empretimos: "+ emprestimos)
    }, [])

    useEffect(() => {
        fetchEmprestimosEmAtraso();
        setPendentesCount(emprestimosAtrasados.length);
    }, [emprestimosAtrasados]);

    return (
        <div>
            <NavbarB />
            <div className="page-content-home-b">
                <h2 className="titulo">Portal do bibliotecário</h2>
                <Box sx={{ padding: 3 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <DashboardCard
                                icon={LibraryBooksIcon}
                                title="Livros Cadastrados"
                                value={livrosCount}
                                buttonLabel="Controle do Acervo"
                                onButtonClick={() => handleNavigation("/acervo-b")}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DashboardCard
                                icon={BookIcon}
                                title="Livros Reservados"
                                value={reservasCount}
                                buttonLabel="Ver Reservas"
                                onButtonClick={() => handleNavigation("/reservas-b")}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DashboardCard
                                icon={AssignmentIcon}
                                title="Livros Emprestados"
                                value={emprestimosCount || 0}
                                buttonLabel="Ver Empréstimos"
                                onButtonClick={() => handleNavigation("/emprestimos-b")}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DashboardCard
                                icon={ErrorIcon}
                                title="Livros Pendentes"
                                value={pendentesCount}
                                buttonLabel="Ver Pendentes"
                                onButtonClick={() => handleNavigation("/emprestimos-b", true)}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Footer />
        </div>
    );
}
