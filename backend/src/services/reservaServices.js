import { Op } from "sequelize";
import Reserva from "../models/Reserva.js";
import Livro from "../models/Livro.js";
import Emprestimo from "../models/Emprestimo.js";
import { ReservaJaAssociada, ReservaNaoEncontrada, ReservaIndisponivel, ReservaFinalizada, LimiteReservaError } from "../errors/reservaError.js"
import EmprestimoService from "./emprestimoService.js";
import { EmprestimoAtrasadoError } from "../errors/emprestimosError.js";
import ReservaResponseBuilder from "../builders/ReservaResponseBuilder.js";
import Conta from "../models/Conta.js";
import Usuario from "../models/Usuario.js";

class ReservaServices{
    static diasReserva = 2;

    static async findAll(){
        const reservas = await Reserva.findAll();

        const reservasArrayWithLivros = [];
        for(const reserva of reservas){
            const livro = await Livro.findByPk(reserva.dataValues.idLivro);
            reserva.dataValues.livro = livro;
            const usuario = await Usuario.findByPk(reserva.dataValues.cpfUsuario);
            const conta = await Conta.findByPk(usuario.dataValues.idConta);
            reserva.dataValues.usuario = {...conta.dataValues, cpf: usuario.dataValues.cpf }
            reservasArrayWithLivros.push({
                ...reserva
            });

        }

        const ReservaBuilder = new ReservaResponseBuilder();
        const response = ReservaBuilder.addReservaData(reservasArrayWithLivros).dataValues().withoutTimestamps().build();
        return response;
    }

    static async findbyId(id){
        const reserva =  await Reserva.findByPk(id);
        if(!reserva){
            throw new ReservaNaoEncontrada();
        }

        const ReservaBuilder = new ReservaResponseBuilder();
        const response = ReservaBuilder.addReservaData(reserva).dataValues().withoutTimestamps().build();
        return response;
    }
    static async findByCPF(cpf){
        const reservas = await Reserva.findAll({
            where:{
                cpfUsuario: cpf
            }
        })
        const ReservaBuilder = new ReservaResponseBuilder();
        const reservasFormatted = ReservaBuilder.addReservaData(reservas).dataValues().withoutTimestamps().build();
        return reservasFormatted
    }

    static async create(reserva, cpf){
       
        console.error("verificando se livro esta disponivel")
        console.error(reserva);
        console.log(reserva.idLivro);
        
        const livro = await Livro.findByPk(reserva.idLivro);
        if(livro.status !== 'Disponivel'){
            throw new Error('Livro não disponível para reserva');
        }


        console.error("verificando emprestimos em atraso")
        const emprestimosAtrasados = await EmprestimoService.findEmprestimosEmAtrasoByCPF(cpf);

        if(emprestimosAtrasados.length > 0){
            throw new EmprestimoAtrasadoError();
        }

        console.error("verificando reservas do usuario")
        const reservasUser = await Reserva.findAll({
            where:{
                cpfUsuario: cpf,
                status: 'Ativa'
            }
        })

        if(reservasUser.length >= 3){
            throw new LimiteReservaError();
        }

        let reservaExist = await Reserva.findAll({
            where:{
                idLivro: Number(reserva.idLivro) ,
                status : 'Ativa'
            }
        })
        if(reservaExist.length > 0){
            throw new ReservaJaAssociada();
        }

        //todo: Livro -> status : "Disponivel"
        let livroEmprestado = await Emprestimo.findAll({
            where:{
                idLivro: reserva.idLivro ,
                dataFim:{[Op.gte]: reserva.dataReserva}, // Empréstimo termina depois ou no início da reserva      
                status:"Ativo"
            }
        })
        if(livroEmprestado.length>0){
            throw new ReservaIndisponivel();
        }


        console.error("atualizando reserva e colocando no banco.")

        const timestamp = Date.parse(reserva.dataReserva);
        const dataReserva = new Date(timestamp);
        const prazoReserva = new Date(timestamp + (86400000 * this.diasReserva));

        reserva.status = "Ativa";
        reserva.dataReserva = dataReserva;
        reserva.prazoReserva = prazoReserva;

        //mudar status do livro
        livro.status = "Reservado"
        await livro.save();


        console.error(reserva);
        const reservaCriada = await Reserva.create(reserva);
        
        const ReservaBuilder = new ReservaResponseBuilder();
        const response = ReservaBuilder.addReservaData(reservaCriada).dataValues().withoutTimestamps().build();
        return response;
    }

    static async update(reserva, idReserva){
        const reservaDb = await Reserva.findByPk(idReserva);
        if (!reservaDb) {
            throw new ReservaNaoEncontrada();
        }
        const reservaAtt = await reservaDb.update({ ...reserva });
        await reservaDb.save();

        const ReservaBuilder = new ReservaResponseBuilder();
        const response = ReservaBuilder.addReservaData(reservaAtt).dataValues().withoutTimestamps().build();
        return response;
    }

    static async delete(id){
        const reservaDb = await Reserva.findByPk(id);
        if (!reservaDb) {
            throw new ReservaNaoEncontrada();
        }
        await reservaDb.destroy();
        return reservaDb;
    }

    static async cancel(idReserva){
        const reservaDB = await Reserva.findByPk(idReserva);
        
        if (!reservaDB) {
            throw new ReservaNaoEncontrada();
        }
        
        if(reservaDB.status === "Finalizada"){
            throw new ReservaFinalizada();
        }
        
        const livro = await Livro.findByPk(reservaDB.idLivro);
        livro.status = "Disponivel";
        await livro.save()
        
        reservaDB.status = "Cancelada";
        await reservaDB.save();
    }
}

export default ReservaServices