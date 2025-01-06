import e from "express";

import usuarioRouter from "./usuarioRoutes.js";
import livroRouter from "./livroRoutes.js";
import categoriaRoutes from "./categoriaRoutes.js";
import livroCategoriaRoutes from "./livroCategoriaRoutes.js";

const routes = e.Router();

routes.use(usuarioRouter);
routes.use(livroRouter);
routes.use(categoriaRoutes);
routes.use(livroCategoriaRoutes);

export default routes;