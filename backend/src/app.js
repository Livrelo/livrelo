// Esse import da database inicializa ela, temos que ver se é a melhor forma ser usada "solta" assim. Talvez um singleton seja suficiente
import DatabaseSingleton from "./database/DatabaseSingleton.js";

import express from "express";
import routes from "./routes/routes.js";

class App {
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
        this.initDatabase();
    }

    async initDatabase(){
        this.database = await DatabaseSingleton.getInstance();
    }


    middlewares(){
        this.server.use(express.json())

    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;