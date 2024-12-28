// Esse import da database inicializa ela, temos que ver se é a melhor forma ser usada "solta" assim. Talvez um singleton seja suficiente
import "./database/database.js";

import express from "express";


class App {
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }


    middlewares(){

    }

    routes(){
        
    }
}

export default new App().server;