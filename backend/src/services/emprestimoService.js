import { Op } from "sequelize";
import Emprestimo from "../models/Emprestimo";

class emprestimoService{
    //CONSULTAS DE EMPRESTIMOS ABAIXO -> GET 
    //obter todos os emprestimos existentes
    static async findAll(){
        try {
            const emprestimos = await Emprestimo.findAll();
            return emprestimos;
        } catch (error) {
            throw new Error(`Erro ao buscar todos os empréstimos: ${error.message}`);
        }
    }
    //obter emprestimos pelo CPF do usuario
    static async findByCPF(CPF){
        try {
            const emprestimosCPF = await Emprestimo.findAll({
                where: { cpf: CPF},
            });
            return emprestimosCPF;
        } catch (error) {
            throw new Error(`Erro ao buscar empréstimos por CPF: ${error.message}`);
        }
    }
    //obter emprestimo pelo seu proprio id
    static async findByID(idEmprestimo){
        try {
            const emprestimo = await Emprestimo.findByPk(idEmprestimo);
            if(!emprestimo){
                throw new Error(`Erro ao buscar emprésstimo: ${error.message}`);
            }
            return emprestimo;
        } catch (error) {
            throw new Error(`Erro ao buscar empréstimo: ${error.message}`);
        }
    }
    //obter emprestimos em atraso
    //if(dataFim < hoje) -> status de pendente
    static async findEmprestimoEmAtraso(){
        try {
            const dataAtual = new Date();
            const emprestimosEmAtraso = await Emprestimo.findAll({
                where: {
                    dataFim: {
                        [Op.lt]: dataAtual,
                    },
                },
            });
            return emprestimosEmAtraso;
        } catch (error) {
            throw new Error(`Erro ao buscar empréstimos em atraso: ${error.message}`);
        }
    }

    //CRIAÇÃO/REGISTRO DE EMPRESTIMO -> POST
    static async create(dataInicio, dataFim, CPF, idReserva){
        try {
            const novoEmprestimo = await Emprestimo.create({
                dataInicio: dataInicio,
                dataFim: dataFim,
                cpf: CPF,
                idReserva: idReserva,
            });
            return novoEmprestimo;
        } catch (error) {
            throw new Error(`Erro ao criar empréstimo: ${error.message}`);
        }
    }
    //ATUALIZAR EMPRESTIMO SERIA RENOVAR, INSERINDO UMA NOVA DATAFIM? - PUT
    static async update(idEmprestimo, newDataFim){
        try {

            const emprestimoAtt = await Emprestimo.findByPk(idEmprestimo);
            if(!emprestimoAtt){

                throw new Error(`Erro ao obter empréstimo: ${error.message}`);
            }

            emprestimoAtt.dataFim = newDataFim;
            await emprestimoAtt.save();
            return emprestimoAtt;

        } catch (error) {

            throw new Error(`Erro ao atualizar empréstimo: ${error.message}`);

        }
    }
    //DELETAR EMPRESTIMO NÃO É NECESSÁRIO


}

export default emprestimoService;