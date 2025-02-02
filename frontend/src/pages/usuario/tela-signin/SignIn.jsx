import * as React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header-signup/Header.jsx";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../../components/Input/Input";
import { Button, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useAuthStore from "../../../zustand/auth/auth.js";
import useReservaStore from "../../../zustand/reserva/reserva.js";
import useLivrosStore from "../../../zustand/livro/livro.js";
import useEmprestimoStore from "../../../zustand/emprestimo/emprestimo.js";
import img from "./bg.jpg";
import "./styleSignin.css";
import { notify } from "../../../index.js";

function SignIn() {

	const theme = createTheme({
		palette: {
			blues: {
				main: "#2a4fa0",
				light: "#162E62",
				dark: "#112757",
				contrastText: "#ffffff",
			},
			whites: {
				main: "#162E62",
				dark: "#fffffff",
				light: "#ffffff",
				contrastText: "#162E62",
			},
		},
	});
	const initialValues = {
		email: "",
		senha: "",
	};

	const validationSchema = Yup.object({
		email: Yup.string()
			.required("O email é obrigatório.")
			.email("Coloque um email válido"),
		senha: Yup.string().required("A senha é obrigatória."),
	});

	const navigate = useNavigate();

	const { login, conta } = useAuthStore();
	const { fetchEmprestimosByCPF, fetchAllEmprestimos } = useEmprestimoStore();
	const { fetchLivros, livros } = useLivrosStore();
	const { fetchReservasByCPF, fetchReservas} = useReservaStore();
	const handleSubmit = async (values) => {
		try{
		const response = await login({email: values.email, senha: values.senha});
		if(response){
			// chama funcao de pegar livros
			console.log(response.conta);
			console.log(response);

			if(response.conta.role === 'bibliotecario'){
				await fetchLivros();
				await fetchAllEmprestimos();
				//fetch all emprestimos atrasados
				await fetchReservas();
				console.log(livros);
				//fetch no que precisa bibliotecario
				navigate("/home-b");

			}else{
				//funcoes de bibliotecario
				await fetchLivros();
				// chama funcao de pegar emprestimo
				await fetchEmprestimosByCPF(response.conta.cpf);
				// chama funcao de pegar reservas
				await fetchReservasByCPF(response.conta.cpf);
				navigate("/home");
				
			}
		}
		}catch(error){
		console.log(error.message);
		}
	};

	return (
		<div className="Sign">
			<Header />
			<div className="Sign-Container">
				<img src={img} alt="SignImg" className="SignImg"></img>
				<div className="wrap-form-SignIn">
					<Box className="login-form">
						<Typography variant="h6" className="tittle-SignIn">
							Entrar
						</Typography>
						<Formik
							initialValues={{ ...initialValues }}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							{({ isValid, dirty }) => (
								<Form>
									<Input
										name="email"
										label="e-mail"
										placeholder="Digite seu e-mail"
										type="text"
									/>
									<Input
										name="senha"
										label="senha"
										placeholder="Digite sua senha"
										type="password"
									/>
									<Box
										component="div"
										className="btn-signIn-div"
									>
										<ThemeProvider theme={theme}>
											<Button
												className="signIn-botao"
												variant="contained"
												color="blues"
												size="large"
                        type="submit"
												disabled={!isValid || !dirty}
											>
												Entrar
											</Button>
										</ThemeProvider>
									</Box>
								</Form>
							)}
						</Formik>
					</Box>

					<span className="label-ToSignUp">
						Ainda não possui conta?
					</span>

					<Box component="div" className="btn-signIn-div">
						<ThemeProvider theme={theme}>
							<Button
								className="toSignUp-botao"
								variant="outlined"
								color="whites"
								size="large"
								onClick={() => navigate("/signup")}
							>
								Cadastre-se
							</Button>
						</ThemeProvider>
					</Box>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
