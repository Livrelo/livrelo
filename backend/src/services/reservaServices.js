import { Op } from "sequelize";
import Reserva from "../models/Reserva.js";
import Livro from "../models/Livro.js";

class ReservaServices{
    static diasReserva = 2;

    static async findAll(){
        return await Reserva.findAll();
    }

    static async findbyId(id){
        const reserva =  await Reserva.findByPk(id);

        if(!reserva){
            throw new Error("Reserva não encontrada");
        }

        return reserva
    }

    static async create(reserva){
        reserva.status = "Em andamento.";
        
        const {status} = await Livro.findByPk(reserva.idLivro);
        if(status !== 'Disponível'){
            throw new Error('Livro não disponível para reserva');
        }


        const timestamp = Date.parse(reserva.dataReserva);
        const dataReserva = new Date(timestamp);
        const prazoReserva = new Date(timestamp + (86400000 * this.diasReserva));

        reserva.dataReserva = dataReserva;
        reserva.prazoReserva = prazoReserva;
        
        return  await Reserva.create(
                reserva
            // { fields:['cpfUsuario', 'dataReserva', 'prazoReserva'] },
        );
    }

    static async update(reserva, idReserva){
        const reservaDb = await Reserva.findByPk(idReserva);
        if (!reservaDb) {
            throw new Error("Reserva não encontrada");
        }
        const reservaAtt = await reservaDb.update({ ...reserva });
        await reservaDb.save();
        return reservaAtt
    }

    static async delete(id){
        const reservaDb = await Reserva.findByPk(id);
        await reservaDb.destroy();
        return reservaDb;
    }
}

export default ReservaServices