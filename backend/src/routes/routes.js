import e from "express";
import usuarioRouter from "./usuarioRoutes.js";

const routes = e.Router();

routes.use(usuarioRouter);

export default routes;