import e from "express";
import emprestimoRouter from "./emprestimoRoutes.js";

const routes = e.Router();

//testar rotas aqui
routes.use(emprestimoRouter);


export default routes;