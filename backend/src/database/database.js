import { Sequelize } from "sequelize";
import databaseConfig from "./config.js";

//importar models

// Coloque os models novos dentro do array de models que eles irão automaticamente ser utilizados dentro da classe.
const models = [];

// transformar database em singleton?
class Database {
    constructor(){
        this.init();
    }

    async init(){
        const connection = new Sequelize(databaseConfig);
        try{
            await connection.authenticate();
            console.log("database connected.")
        }catch(error){
            console.log(error);
        }
        this.connection = connection;
        models.map((model) => model.init(this.connection));
    }
}


export default new Database();