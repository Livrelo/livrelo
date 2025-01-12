import { canTreatArrayAsAnd } from "sequelize/lib/utils";
import ContaService from "../services/ContaService.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

const salt_rounds = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;

async function crypt(senha){
    return await bcrypt.hash(senha, Number(salt_rounds));
}

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

            const token = jsonwebtoken.sign({ id: conta.idConta, email: conta.email }, String(JWT_SECRET), {
                expiresIn: "1h", // Token expira em 1 hora
              });

            return res.status(200).send({
                message: 'LogIn efetuado com sucesso!',
                conta: conta,
                token: token,
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

            conta.senha = await crypt(conta.senha);

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
            //console.log(idConta);
            const conta = req.body;

            conta.senha = await crypt(conta.senha);

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
            const idConta = req.params.idConta;
            //console.log(idConta);
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