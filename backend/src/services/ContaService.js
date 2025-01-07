import Conta from "../models/Conta.js";

class ContaService{

    static async logIn(data){

        const conta = await Conta.findAll({
            where: {
                email: data.email,
                senha: data.senha,
            },
        });

        console.log(conta);

        if(!conta[0]){
            throw new Error("Conta não encontrada!")
        }

        return conta[0];
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

        //console.log(emailExiste);

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

        await contaDeletar.destroy();

        return contaDeletar;
    }
}

export default ContaService;