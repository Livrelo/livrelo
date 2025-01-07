import e from "express";
import contaRouter from "./contaRoutes.js";

const routes = e.Router();

//testar rotas aqui
routes.use(contaRouter);


export default routes;