import e from "express";
import emprestimoRouter from "./emprestimoRoutes.js";
import devolucaoRouter from "./devolucaoRoutes.js";

const routes = e.Router();

//testar rotas aqui
routes.use(emprestimoRouter);
routes.use(devolucaoRouter);

export default routes;