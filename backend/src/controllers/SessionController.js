import ContaResponseBuilder from "../builders/ContaResponseBuilder.js";
import { crypt, JWT_SECRET } from "../middlewares/Auth.js";
import ContaService from "../services/ContaService.js"
import UsuarioService from "../services/UsuarioService.js";
import bcrypt from 'bcrypt';
import jsonwebtoken from "jsonwebtoken";





class SessionController {
    static async signin(req, res){
        try{
            const conta = {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
            }
            conta.senha = await crypt(conta.senha);
    
            const contaCriada = await ContaService.create(conta);

    
    
            const usuario = {
                cpf: req.body.cpf,
                idConta: contaCriada.idConta
            };
    
            const usuarioCriado = await UsuarioService.create(usuario);
            
            return res.status(201).send({
                message: 'Usuario criado com sucesso'
            });
        }catch(error){
            return res.status(400).send({
                message: 'Erro ao criar usuário',
                error: error.m

            });
        }
    }

    static async login(req, res){
        try{
            const email = req.body.email;
            const senha = req.body.senha;

            const data = {
                email: email,
                senha: senha,
            }

            const conta = await ContaService.logIn(data);

            const idConta = conta.idConta;

            const account = await ContaService.getAccount(idConta);

            

            const token = jsonwebtoken.sign({ id: conta.idConta, email: conta.email, role: account.role, cpf: account.cpf }, JWT_SECRET, {
                expiresIn: "1h", // Token expira em 1 hora
            });

            const tokenWithBearer = `Bearer ${token}`;

            const builder = new ContaResponseBuilder();
            const responseConta = builder
                .addContaData(conta)
                .dataValues()
                .withoutTimestamps()
                .withoutPassword()
                .build();

            return res.status(200).send({
                message: 'LogIn efetuado com sucesso!',
                conta: responseConta,
                token: tokenWithBearer,
            });

        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro encontrando essa conta em específico!',
                error: error.message
            });
        }
    }

    static async logOut(req, res){

        return res.status(200).send({
            message: 'Logout realizado com sucesso',
            conta: null,
            token: null,
        })
    }
}

export default SessionController;