import React from "react";
import { Grid, Box } from "@mui/material";
import DashboardCard from "../../../components/dashboard-bib/DashboardCard";
import { useNavigate } from "react-router-dom";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PeopleIcon from "@mui/icons-material/People";
import BookIcon from "@mui/icons-material/Book";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ErrorIcon from "@mui/icons-material/Error";
import NavbarB from "../../../components/navbar-bib/NavbarB";
import Footer from "../../../components/footer/Footer";
import "./styles.css";

//usando valores de teste q dps devem ser subtituidos pelas contagens etc

export default function HomeB() {
    const navigate = useNavigate();
    const handleNavigation = (route) => {
        navigate(route);
    };

    return (
        <div>
            <NavbarB />
            <div className="page-content-home-b">
                <h2 className="titulo">Portal do bibliotecário</h2>
                <Box sx={{ padding: 3 }}>
                    <Grid container spacing={3}>
                        {/* 3 cards em cima */}
                        <Grid item xs={12} md={4}>
                            <DashboardCard
                                icon={LibraryBooksIcon}
                                title="Livros Cadastrados"
                                value="150" //contagem de livros
                                buttonLabel="Controle do Acervo"
                                onButtonClick={() => handleNavigation("/acervo-b")}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DashboardCard
                                icon={PeopleIcon}
                                title="Usuários Cadastrados"
                                value="45" //contagem de usuarios
                                buttonLabel="Ver Usuários"
                                onButtonClick={() => handleNavigation("/usuarios-b")}
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DashboardCard
                                icon={BookIcon}
                                title="Livros Reservados"
                                value="20" //contagem de reservas
                                buttonLabel="Ver Reservas"
                                onButtonClick={() => handleNavigation("/reservas-b")}
                            />
                        </Grid>
                        {/* 2 cards maiores dps */}
                        <Grid item xs={12} md={6}>
                            <DashboardCard
                                icon={AssignmentIcon}
                                title="Livros Emprestados"
                                value="30" //contagem de emprestimos
                                buttonLabel="Ver Empréstimos"
                                onButtonClick={() => handleNavigation("/emprestimos-b")}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DashboardCard
                                icon={ErrorIcon}
                                title="Livros Pendentes"
                                value="5" //contagem de atrasados
                                buttonLabel="Ver Pendentes"
                                onButtonClick={() => handleNavigation("/pendencias-b")}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Footer />
        </div>
    );
}
