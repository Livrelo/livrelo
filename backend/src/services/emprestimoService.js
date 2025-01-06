import { Op } from "sequelize";
import Emprestimo from "../models/Emprestimo";

class emprestimoService {
    //CONSULTAS DE EMPRESTIMOS ABAIXO -> GET 

    //obter todos os empréstimos existentes
    static async findAll() {
        const emprestimos = await Emprestimo.findAll();
        return emprestimos;
    }

    //obter empréstimos pelo CPF do usuário
    static async findByCPF(CPF) {
        const emprestimosCPF = await Emprestimo.findAll({
            where: { cpf: CPF },
        });
        return emprestimosCPF;
    }

    //obter empréstimo pelo seu próprio ID
    static async findByID(idEmprestimo) {
        const emprestimo = await Emprestimo.findByPk(idEmprestimo);
        if (!emprestimo) {
            throw new Error(`Empréstimo não encontrado`);
        }
        return emprestimo;
    }

    //obter empréstimos em atraso 
    static async findEmprestimoEmAtraso() {
        const dataAtual = new Date();
        const emprestimosEmAtraso = await Emprestimo.findAll({
            where: {
                dataFim: {
                    [Op.lt]: dataAtual,
                },
            },
        });
        return emprestimosEmAtraso;
    }

    //CRIAÇÃO/REGISTRO DE EMPRESTIMO -> POST
    static async create(dataInicio, dataFim, CPF, idReserva) {
        const novoEmprestimo = await Emprestimo.create({
            dataInicio: dataInicio,
            dataFim: dataFim,
            cpf: CPF,
            idReserva: idReserva,
        });
        return novoEmprestimo;
    }

    //ATUALIZAR EMPRESTIMO SERIA RENOVAR, INSERINDO UMA NOVA DATAFIM - PUT
    static async update(idEmprestimo, newDataFim) {
        const emprestimoAtt = await Emprestimo.findByPk(idEmprestimo);
        if (!emprestimoAtt) {
            throw new Error(`Empréstimo não encontrado`);
        }

        emprestimoAtt.dataFim = newDataFim;
        await emprestimoAtt.save();
        return emprestimoAtt;
    }
}

export default emprestimoService;
