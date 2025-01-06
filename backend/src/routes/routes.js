import e from "express";
import livroRouter from "./livroRoutes.js";

const routes = e.Router();

//testar rotas aqui
routes.use(livroRouter);


export default routes;