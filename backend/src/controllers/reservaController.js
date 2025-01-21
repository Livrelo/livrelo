import ReservaServices from "../services/reservaServices.js";
import httpCodes from "../utils/httpCodes.js";

const {HttpCode, HttpError} = httpCodes

class ReservaController{
    
    //obter reservas
    static async findAll(req, res){
        try{
            const reservas = await ReservaServices.findAll();
            return res.status(200).json(reservas);
        } catch (e){
            if(e instanceof HttpError){
                return res.status(e.httpCode).send({
                    message: "Erro ao carregar as reservas",
                    error: e.message
                });
            }

            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: e.message });
        }
    }

    static async findById(req, res){
        
        try{
            const reservaId = req.params.id;
            const reserva = await ReservaServices.findbyId(reservaId);
            return res.status(200).json(reserva);
        } catch (e){
            if(e instanceof HttpError)
                return res.status(e.httpCode).send({
                    message: "Erro ao carregar a reserva",
                    error: e.message
                });
    
                return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: e.message });
        }
    }

    static async create(req, res){
        try{
            const reserva = req.body;

            console.log(req);
            const cpf = req.cpf ? req.cpf : null;
            
            const response = await ReservaServices.create({...reserva}, cpf);
            
            return res.status(201).send({
                message: 'Reserva criada com sucesso.',
                reserva: response
            });
        }catch(e){
            if(e instanceof HttpError)
                return res.status(e.httpCode).send({
                    message: "Ocorreu um erro ao criar uma reserva.",
                    error: e.message
                });
    
                return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: e.message });
        }
    }

    static async update(req, res){
        try{
            const id = req.params.id;
            const reserva = req.body;
            const reservaAtt = await ReservaServices.update(reserva,id)
            
            return res.status(200).send({
                message: 'Reserva atualizada com sucesso.',
                reserva: reservaAtt
            })

        } catch (e){
            return res.status(400).send({
                message: 'Ocorreu um erro ao atualizar a reserva.',
                error: e.message
            });
        }
    }

    static async delete(req, res){
        try{
            const id = req.params.id;

            const reserva = await ReservaServices.delete(id);
            return res.status(200).send({
                message: 'Reserva deletada com sucesso.',
                reserva: reserva
            })
        } catch (e){
            return res.status(400).send({
                message: 'Ocorreu um erro ao deletar a reserva.',
                error: error.message
            });
        }
    }

    static async cancel(req, res){
        try{
            const idReserva = req.params.id;

            const reserva = await ReservaServices.cancel(idReserva);

            return res.status(200).send({
                message: 'Reserva cancelada com sucesso.',
                reserva: reserva
            })
        }catch(e){
            if(e instanceof HttpError){
                return res.status(e.httpCode).send({
                    message: "Ocorreu um erro ao criar uma reserva.",
                    error: e.message
                });
            }
    
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: e.message });
        }
    }
}

export default ReservaController;