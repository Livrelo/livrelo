import { Op } from "sequelize";
import Reserva from "../models/Reserva.js";
import Livro from "../models/Livro.js";
import Emprestimo from "../models/Emprestimo.js";
import { ReservaJaAssociada, ReservaNaoEncontrada, ReservaIndisponivel, ReservaFinalizada, LimiteReservaError } from "../errors/reservaError.js"
import EmprestimoService from "./emprestimoService.js";
import { EmprestimoAtrasadoError } from "../errors/emprestimosError.js";
import ReservaResponseBuilder from "../builders/ReservaResponseBuilder.js";

class ReservaServices{
    static diasReserva = 2;

    static async findAll(){
        const reservas = await Reserva.findAll();

        const ReservaBuilder = new ReservaResponseBuilder();
        const response = ReservaBuilder.addReservaData(reservas).dataValues().withoutTimestamps().build();
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

    static async create(reserva, cpf){
       
        
        const livro = await Livro.findByPk(reserva.idLivro);
        if(livro.status !== 'Disponivel'){
            throw new Error('Livro não disponível para reserva');
        }

        const emprestimosAtrasados = await EmprestimoService.findEmprestimosEmAtrasoByCPF(cpf);

        if(emprestimosAtrasados.length > 0){
            throw new EmprestimoAtrasadoError();
        }

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
                idLivro: reserva.idLivro ,
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


        const timestamp = Date.parse(reserva.dataReserva);
        const dataReserva = new Date(timestamp);
        const prazoReserva = new Date(timestamp + (86400000 * this.diasReserva));

        reserva.status = "Ativa";
        reserva.dataReserva = dataReserva;
        reserva.prazoReserva = prazoReserva;

        //mudar status do livro
        livro.status = "Reservado"
        await livro.save();

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