import e from "express";
import livroRouter from "./livroRoutes.js";
import categoriaRoutes from "./categoriaRoutes.js";

const routes = e.Router();

//testar rotas aqui
routes.use(livroRouter);
routes.use(categoriaRoutes);

export default routes;