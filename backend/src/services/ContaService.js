import Conta from "../models/Conta.js";
import bcrypt from "bcrypt";
import UsuarioService from "./UsuarioService.js";

class ContaService{

    static async logIn(data){

        const conta = await Conta.findAll({
            where: {
                email: data.email,
            },
        });

        

        if(!conta[0]){
            throw new Error("Conta não encontrada!")
        }

        const validationSenha = await bcrypt.compare(data.senha, conta[0].senha);

        if(!validationSenha){
            throw new Error("Email ou senha não estão corretos!");
        }

        return conta[0];
    }

    static async getAccount(idConta){
        const usuario = await UsuarioService.findByIdConta(idConta);
        const account = usuario[0] ? {
            cpf: usuario[0].cpf,
            role: 'usuario'
        } : {
            cpf: null,
            role: 'bibliotecario'
        };

        return account;
    }
    // ANALISAR APLICABILIDADE

    /*
    static async findByIdConta(idConta){

        const conta = await Conta.findByPk(idConta);
        return conta;
    }
    */

    static async create(conta){

        const emailExiste = await Conta.findOne({
            where: {
                email: conta.email
            }
        })



        if(emailExiste){
            throw new Error("Esse email já está em uso!");
        }

        
        const contaCriada = await Conta.create(conta);
        
        return contaCriada;
    }

    static async update(conta, idConta){

        const contaBD = await Conta.findByPk(idConta);

        if(!contaBD){
            throw new Error("Conta não encontrada");
        }

        const contaAtualizada = await contaBD.update({...conta});

        await contaBD.save();

        return contaAtualizada;
    }

    static async delete(idConta){
        const contaDeletar = await Conta.findByPk(idConta);

        if(!contaDeletar){
            throw new Error("Conta não encontrada!")
        }

        await contaDeletar.destroy();

        return contaDeletar;
    }
}

export default ContaService;