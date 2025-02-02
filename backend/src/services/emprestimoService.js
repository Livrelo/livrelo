import { Op } from "sequelize";
import Emprestimo from "../models/Emprestimo.js";
import devolucaoService from "./devolucaoService.js";
import Reserva from "../models/Reserva.js";
import { ReservaIndisponivel, ReservaNaoEncontrada } from "../errors/reservaError.js";
import { LimiteEmprestimoError, EmprestimoAtrasadoError } from "../errors/emprestimosError.js";
import Livro from "../models/Livro.js";
import EmprestimoResponseBuilder from "../builders/EmprestimoResponseBuilder.js";
import Devolucao from "../models/Devolucao.js";
class EmprestimoService {
    //CONSULTAS DE EMPRESTIMOS ABAIXO -> GET 
    static diasEmprestimo = 14;
    //obter todos os empréstimos existentes
    static async findAll() {
        const emprestimos = await Emprestimo.findAll();

        const builder = new EmprestimoResponseBuilder();
        const response = builder
            .addEmprestimoData(emprestimos)
            .dataValues()
            .withoutTimestamps()
            .build();
        return response;
    }

    //obter empréstimos pelo CPF do usuário
    static async findByCPF(cpf) {
        if (!cpf) {
            throw new Error("CPF não fornecido");
        }
        const emprestimosCPF = await Emprestimo.findAll({
            where: { cpf: cpf },
        });
        const emprestimos = [];

        for (let emprestimo of emprestimosCPF) {
            const livro = await Livro.findByPk(emprestimo.idLivro);
            emprestimo.dataValues.livro = livro;
            const devolucao = await Devolucao.findByPk(emprestimo.idEmprestimo);
            emprestimo.dataValues.dataDevolucao = devolucao.dataDevolucao ? devolucao.dataDevolucao : null;
            emprestimos.push(emprestimo);
        }

        const builder = new EmprestimoResponseBuilder();
        const response = builder
            .addEmprestimoData(emprestimos)
            .dataValues()
            .withoutTimestamps()
            .build();
        return response;
    }

    //obter empréstimo pelo seu próprio ID
    static async findByID(idEmprestimo) {
        const emprestimo = await Emprestimo.findByPk(idEmprestimo);
        if (!emprestimo) {
            throw new Error(`Empréstimo não encontrado`);
        }

        const builder = new EmprestimoResponseBuilder();
        const response = builder
            .addEmprestimoData(emprestimo)
            .dataValues()
            .withoutTimestamps()
            .build();
        return response;
    }

    //obter emprestimos em atraso
    static async findEmprestimoEmAtraso() {
        const dataAtual = new Date();
        //obter todos os empréstimos com dataFim < hoje (terminados)
        const emprestimosFinalizados = await Emprestimo.findAll({
            where: {
                dataFim: {
                    [Op.lt]: dataAtual,
                },
                status: {
                    [Op.ne]: "Atrasado",
                }
            },
        });

        //filtrar emprestimos sem data de devolucao
        //da pra fazer com left join, mas é melhor reutilizar a funçao ja existente de devolucaoService para verificar por ID
        const emprestimosEmAtraso = [];
        for (const emprestimo of emprestimosFinalizados) {
            const devolucao = await devolucaoService.findByID(emprestimo.idEmprestimo);

            if (!devolucao) {
                emprestimo.status = "Atrasado";
                await emprestimo.save();
                emprestimosEmAtraso.push(emprestimo);

            }
        }

        const builder = new EmprestimoResponseBuilder();
        const response = builder
            .addEmprestimoData(emprestimosEmAtraso)
            .dataValues()
            .withoutTimestamps()
            .build();
        return response;
    }
    static async findEmprestimosEmAtrasoByCPF(cpf) {
        const dataAtual = new Date();

        const emprestimosEmAtraso = await Emprestimo.findAll({
            where: {
                cpf: cpf,
                dataFim: { [Op.lte]: dataAtual },
                status: { [Op.ne]: "Atrasado" },
            }
        })

        const builder = new EmprestimoResponseBuilder();
        const response = builder
            .addEmprestimoData(emprestimosEmAtraso)
            .dataValues()
            .withoutTimestamps()
            .build();
        return response;
    }

    //CRIAÇÃO/REGISTRO DE EMPRESTIMO -> POST
    static async create(cpf, idReserva, idLivro) {


        const emprestimosEmAtraso = await this.findEmprestimosEmAtrasoByCPF(cpf);

        if (emprestimosEmAtraso.length > 0) {
            throw new EmprestimoAtrasadoError();
        }

        const emprestimos = await Emprestimo.findAll({
            where: {
                cpf: cpf,
                status: 'Ativo'
            }
        })



        if (emprestimos.length >= 5) {
            throw new LimiteEmprestimoError();
        }


        //atualizar status reserva reserva
        const reserva = await Reserva.findByPk(idReserva);

        if (!reserva && idReserva) {
            throw new ReservaNaoEncontrada();
        }

        if (reserva.status !== "Ativa") {
            throw new ReservaIndisponivel();
        }

        if (reserva) {
            reserva.status = 'Finalizada';
            await reserva.save();
        }


        const timestamp = Date.now();
        const dataEmprestimo = new Date(timestamp);
        const dataFimEmprestimo = new Date(timestamp + (86400000 * this.diasEmprestimo));

        //mudar status do livro
        const livro = await Livro.findByPk(idLivro);
        livro.status = "Emprestado";
        await livro.save();

        const novoEmprestimo = await Emprestimo.create({
            dataInicio: dataEmprestimo,
            dataFim: dataFimEmprestimo,
            cpf: cpf,
            idReserva: idReserva,
            idLivro: idLivro,
            status: 'Ativo'
        });

        const builder = new EmprestimoResponseBuilder();
        const response = builder
            .addEmprestimoData(novoEmprestimo)
            .dataValues()
            .withoutTimestamps()
            .build();
        return response;
    }

    //ATUALIZAR EMPRESTIMO SERIA RENOVAR, INSERINDO UMA NOVA DATAFIM - PUT
    static async update(idEmprestimo, newDataFim) {
        const emprestimoAtt = await Emprestimo.findByPk(idEmprestimo);
        if (!emprestimoAtt) {
            throw new Error(`Empréstimo não encontrado`);
        }

        emprestimoAtt.dataFim = newDataFim;
        await emprestimoAtt.save();

        const builder = new EmprestimoResponseBuilder();
        const response = builder
            .addEmprestimoData(emprestimoAtt)
            .dataValues()
            .withoutTimestamps()
            .build();
        return response;
    }
}

export default EmprestimoService;
