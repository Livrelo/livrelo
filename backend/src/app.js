// Esse import da database inicializa ela, temos que ver se é a melhor forma ser usada "solta" assim. Talvez um singleton seja suficiente
import DatabaseSingleton from "./database/DatabaseSingleton.js";

import express from "express";

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

    }

    routes(){
        
    }
}

export default new App().server;