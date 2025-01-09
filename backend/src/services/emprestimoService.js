import { Op } from "sequelize";
import Emprestimo from "../models/Emprestimo.js";
import devolucaoService from "./devolucaoService.js";
class EmprestimoService {
    //CONSULTAS DE EMPRESTIMOS ABAIXO -> GET 

    //obter todos os empréstimos existentes
    static async findAll() {
        const emprestimos = await Emprestimo.findAll();
        return emprestimos;
    }

    //obter empréstimos pelo CPF do usuário
    static async findByCPF(cpf) {
        if (!cpf) {
            throw new Error("CPF não fornecido");
        }
        const emprestimosCPF = await Emprestimo.findAll({
            where: { cpf: cpf },
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

    //obter emprestimos em atraso
    static async findEmprestimoEmAtraso() {
        const dataAtual = new Date();
        console.log(dataAtual);
        //obter todos os empréstimos com dataFim < hoje (terminados)
        const emprestimosFinalizados = await Emprestimo.findAll({
            where: {
                dataFim: {
                    [Op.lt]: dataAtual,
                },
            },
        });
        console.log("Empréstimos Finalizados:", emprestimosFinalizados);
        //filtrar emprestimos sem data de devolucao
        //da pra fazer com left join, mas é melhor reutilizar a funçao ja existente de devolucaoService para verificar por ID
        const emprestimosEmAtraso = [];
        for (const emprestimo of emprestimosFinalizados) {
            const devolucao = await devolucaoService.findByID(emprestimo.idEmprestimo);
            console.log("Devolução encontrada:", devolucao);
            if (!devolucao) {
                emprestimosEmAtraso.push(emprestimo);
            }
        }
        console.log("Empréstimos em atraso:", emprestimosEmAtraso); 
        return emprestimosEmAtraso;
    }

    //CRIAÇÃO/REGISTRO DE EMPRESTIMO -> POST
    static async create(dataInicio, dataFim, cpf, idReserva, idLivro) {
        const novoEmprestimo = await Emprestimo.create({
            dataInicio: dataInicio,
            dataFim: dataFim,
            cpf: cpf,
            idReserva: idReserva,
            idLivro: idLivro,
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

export default EmprestimoService;
