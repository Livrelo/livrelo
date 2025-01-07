import { canTreatArrayAsAnd } from "sequelize/lib/utils";
import ContaService from "../services/ContaService.js";

class ContaController{

    static async logIn(req, res){
        try{
            const email = req.body.email
            const senha = req.body.senha
            const data = {
                email: email,
                senha: senha,
            }

            const conta = await ContaService.logIn(data);

            return res.status(200).send({
                message: 'LogIn efetuado com sucesso!',
                conta: conta,
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
            conta: null
        })
    }

    // ANALISAR APLICABILIDADE

    /*
    static async findByIdConta(req, res){
        try{
            const idConta = req.params.idConta;
            const conta = await ContaService.findByIdConta(idConta);

            return res.status(200).send({
                conta: conta,
            });
        }catch(error){
            return res.status(200).send({
                message: 'Ocorreu um erro encontrando essa conta em específico!',
                error: error.message
            });
        }
    }
    */


    static async create(req, res){
        try{
            /*
                req.body => conta
                {
                idConta: xxxx
                nome: xxxxxxxxx
                email: xxxxx@xxxxxxxxxx
                senha: xxxxxx
                create_at: 
                updated_at: 
                }
            */

            const conta = req.body;

            const contaCriada = await ContaService.create({...conta});
            return res.status(201).send({
                message: 'Conta criada com sucesso!',
                conta: contaCriada
            });

        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro ao criar a conta!',
                error: error.message
            });
        }
    }

    static async update(req, res){
        try{
            const idConta = req.params.idConta;
            const conta = req.body;
            const contaAtualizada = await ContaService.update(conta, idConta);

            return res.status(200).send({
                message: 'Conta atualizada com sucesso!',
                conta: contaAtualizada,
            });

        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro ao atualizar a conta!',
                error: error.message,
            })
        }
    }

    static async delete(req, res){
        try{
            const idConta = req.param.idConta;

            const contaDeletada = await ContaService.delete(idConta);

            return res.status(200).send({
                message: 'Conta deletada com sucesso!',
                conta: contaDeletada,
            });
        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro ao deletar a conta!',
                error: error.message,
            });
        }
    }
}

export default ContaController;