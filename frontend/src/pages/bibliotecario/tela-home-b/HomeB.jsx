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

    const { livros } = useLivrosStore();
    const { reservas } = useReservaStore();
    const { emprestimos, emprestimosAtrasados, fetchEmprestimosEmAtraso } = useEmprestimoStore();

    const [livrosCount, setLivrosCount] = useState(0);
    const [reservasCount, setReservasCount] = useState(0);
    const [emprestimosCount, setEmprestimosCount] = useState(0);
    const [pendentesCount, setPendentesCount] = useState(0);

    //att contagens
    useEffect(() => {
        setLivrosCount(livros.length);
        setReservasCount(reservas.length);
        setEmprestimosCount(emprestimos.length);
        console.log({livros});
    }, [livros, reservas, emprestimos]);

    useEffect(() => {
        fetchEmprestimosEmAtraso();
    }, []);

    useEffect(() => {
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
                                value={emprestimosCount}
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
