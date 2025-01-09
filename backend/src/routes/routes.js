import e from "express";

import contaRouter from "./contaRoutes.js";
import emprestimoRouter from "./emprestimoRoutes.js";
import devolucaoRouter from "./devolucaoRoutes.js";
import reservaRouter from "./reservaRoutes.js"
import bibliotecarioRouter from "./bibliotecarioRoutes.js";
import usuarioRouter from "./usuarioRoutes.js";
import livroRouter from "./livroRoutes.js";
import categoriaRoutes from "./categoriaRoutes.js";
import livroCategoriaRoutes from "./livroCategoriaRoutes.js";
import usuarioRouter from "./usuarioRoutes.js";

const routes = e.Router();
//testar rotas aqui

routes.use(contaRouter);
routes.use(emprestimoRouter);
routes.use(devolucaoRouter);
routes.use(usuarioRouter);
routes.use(reservaRouter);
routes.use(bibliotecarioRouter);
routes.use(livroRouter);
routes.use(categoriaRoutes);
routes.use(livroCategoriaRoutes);

export default routes;