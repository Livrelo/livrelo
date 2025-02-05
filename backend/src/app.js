// Esse import da database inicializa ela, temos que ver se é a melhor forma ser usada "solta" assim. Talvez um singleton seja suficiente
import DatabaseSingleton from "./database/DatabaseSingleton.js";

import express from "express";
import routes from "./routes/routes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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
        this.server.use(express.json());
        this.server.use(cors())
        this.server.use("/uploads",  express.static(path.join(__dirname, "..", "uploads")));
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;