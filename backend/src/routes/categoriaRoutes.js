import e from "express";

import CategoriaController from "../controllers/CategoriaController.js";

const categoriaRoutes = e.Router();

categoriaRoutes.get("/categoria", CategoriaController.findAll);
categoriaRoutes.get("/categoria/:id", CategoriaController.findById);
categoriaRoutes.post("/categoria", CategoriaController.create);
categoriaRoutes.put("/categoria/:id", CategoriaController.update);
categoriaRoutes.delete("/categoria/:id", CategoriaController.delete);

export default categoriaRoutes;