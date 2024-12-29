import { Sequelize } from "sequelize";
import databaseConfig from "./config.js";

// Models
import Livro from "../models/Livro.js";
import Categoria from "../models/Categoria.js";
import LivroCategoria from "../models/LivroCategoria.js";

class DatabaseSingleton {
    static instance = null;

    static async getInstance() {
        if (!this.instance) {
            this.instance = new Sequelize(databaseConfig);

            try {
                await this.instance.authenticate();
                console.log("Conectado com o banco de dados.");
            } catch (error) {
                console.error("Erro ao se conectar com o banco de dados:", error);
                throw error;
            }

            // Inicializa e sincroniza os modelos
            this.initModels();
        }
        return this.instance;
    }

    static async initModels() {
        const models = [ Livro, Categoria, LivroCategoria ]; //adicionar nesse array novos models que eles serão criados no banco de dados.

        try {
            for(const model of models){
                model.init(this.instance);
                await model.sync({ force: true }); 
                // force: true somente para desenvolvimento!!
                // "force: true" serve para reinicar todas as tabelas do banco de dados para fins de testes.
            }
            
            console.log("Modelos inicializados e sincronizados.");
        } catch (error) {
            console.error("Erro ao inicializar os modelos:", error);
            throw error;
        }
    }
}

export default DatabaseSingleton;