import { json } from "sequelize";
import BibliotecarioService from "../services/bibliotecarioService.js";
import httpCodes from "../utils/httpCodes.js";

const {HttpCode, HttpError} = httpCodes

class BibliotecarioController{

    //obter todos os bibliotecarios
    static async findAll(req, res){
        try {
            const bibliotecarios = await BibliotecarioService.findAll();
            return res.status(200).json(bibliotecarios);
        } catch (e) {
            if(e instanceof HttpError){
                return res.status(e.httpCode).send({
                    message: "Erro ao carregar os bibliotecários",
                    error: e.message
                });
            }

            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: e.message });
        }
    }
    
    static async findById(req, res){
        const bibId = req.params.idConta;

        try{
            const bibliotecario = await BibliotecarioService.findById(bibId);
            return res.status(200).json(bibliotecario)
        } catch (e) {
            if(e instanceof HttpError){
                return res.status(e.httpCode).send({
                    message: "Erro ao carregar o bibliotecário",
                    error: e.message
                });
            }

            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: e.message });
        }
    }

    static async create(req, res) {
        try{
            const bibliotecario = req.body;
            const response = await BibliotecarioService.create({...bibliotecario});
            return res.status(200).json({bibliotecario: response});
        }catch (e) {
            return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: e.message });
        }
    }
}

export default BibliotecarioController;