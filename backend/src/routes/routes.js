import e from "express";
import livroRouter from "./livroRoutes.js";
import categoriaRoutes from "./categoriaRoutes.js";
import livroCategoriaRoutes from "./livroCategoriaRoutes.js";

const routes = e.Router();

//testar rotas aqui
routes.use(livroRouter);
routes.use(categoriaRoutes);
routes.use(livroCategoriaRoutes);

export default routes;