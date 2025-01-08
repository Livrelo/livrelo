import e from "express";
import reservaRouter from "./reservaRoutes.js"
import bibliotecarioRouter from "./bibliotecarioRoutes.js";

const routes = e.Router();

//testar rotas aqui
routes.use(reservaRouter);
routes.use(bibliotecarioRouter);



export default routes;