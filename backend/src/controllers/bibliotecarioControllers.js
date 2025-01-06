import { json } from "sequelize";
import BibliotecarioService from "../services/bibliotecarioService"

class BibliotecarioController{

    //obter todos os bibliotecarios
    static async findAll(req, res){
        try {
            const bibliotecarios = await BibliotecarioService.findAll();
            return res.status(200).json(bibliotecarios);
        } catch (e) {
            return res.status(400).send({
                message: 'Erro ao carregar os bibliotecários',
                error: e.message
            });
        }
    }
    
    static async findById(req, res){
        const bibId = req.params.idConta;

        try{
            const bibliotecario = await BibliotecarioService.findById(bibId);
            return res.status(200).json(bibliotecario)
        } catch (e) {
            return res.status(400).send({
                message: 'Erro ao carregar o bibliotecario',
                error: e.message
            });
        }
    }

    static async create(req, res) {
        try{
            const response = await BibliotecarioService.create();
            return res.status(200).json({bibliotecario: response});
        }catch (e) {
            return res.status(400).json({error: e.message});
        }
    }
}

export default BibliotecarioController;