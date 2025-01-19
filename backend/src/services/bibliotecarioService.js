// import sequelize from "../database/DatabaseSingleton";
import Bibliotecario from "../models/Bibliotecario.js";
import Error from "../errors/bibliotecarioError.js";

const {BibliotecarioNaoEncontrado} = Error

class BibliotecarioServices{

    //obter todos os bibliotecários
    static async findAll(){
        const bibliotecarios = await Bibliotecario.findAll();
        return bibliotecarios;
    }

    //obter bibliotecario por id
    static async findById(id){
        const bibliotecario = await Bibliotecario.findByPk(id);
        if(!bibliotecario){
            throw new BibliotecarioNaoEncontrado();
        }
        return bibliotecario;
    }
    
    //criar bibliotecario
    static async create(bibliotecario){
        return await Bibliotecario.create(bibliotecario)
    }

}

export default BibliotecarioServices;