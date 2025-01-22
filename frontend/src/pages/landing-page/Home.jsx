import React from "react";
import Header from "../../components/header-signup/Header";
import Footer from "../../components/footer/Footer";
import "./home.css";
import { Container, Typography, Grid, Button, Box, Card, CardContent } from "@mui/material";

export default function Home() {
    return (
        <div>
            <Header />
            <Container maxWidth="lg" className="page-content-home">
                <Box className="secao-principal">
                    <Typography variant="h3" component="h1" className="titulo-principal" gutterBottom>
                        Bem-vindo ao LIVRELO
                    </Typography>
                    <Typography variant="h5" className="subtitulo-principal">
                        Sua biblioteca comunitária para empréstimos e doações de livros.
                    </Typography>
                </Box>

                <Grid container spacing={4} className="secao-acoes">
                    <Grid item>
                        <Card className="cartao-acao">
                            <CardContent>
                                <Typography className="titulo-acao">Usuários</Typography>
                                <Typography className="descricao-acao">
                                    Cadastre-se ou faça login para acessar nosso acervo e gerenciar seus empréstimos.
                                </Typography>
                                <div className="botoes-acao">
                                    <button className="botao-acao primario">Cadastro</button>
                                    <button className="botao-acao secundario">Entrar</button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className="cartao-acao">
                            <CardContent>
                                <Typography className="titulo-acao">Portal do Bibliotecário</Typography>
                                <Typography className="descricao-acao">
                                    Acesse ferramentas exclusivas para gerenciar o acervo, acompanhar empréstimos e organizar doações.
                                </Typography>
                                <div className="botoes-acao">
                                    <button className="botao-acao primario">Acessar Portal</button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={4} className="secao-recursos">
                    <Grid item>
                        <Card className="cartao-recurso">
                            <CardContent>
                                <Typography className="titulo-recurso">Acervo Diversificado</Typography>
                                <Typography className="descricao-recurso">
                                    Explore livros de diversos gêneros, autores e temas.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className="cartao-recurso">
                            <CardContent>
                                <Typography className="titulo-recurso">Empréstimos Rápidos</Typography>
                                <Typography className="descricao-recurso">
                                    Reserve e pegue livros de maneira prática e sem burocracia.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className="cartao-recurso">
                            <CardContent>
                                <Typography className="titulo-recurso">Doe Livros</Typography>
                                <Typography className="descricao-recurso">
                                    Contribua doando livros que você não usa mais.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}
