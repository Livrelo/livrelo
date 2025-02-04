import e from "express";

import CategoriaController from "../controllers/CategoriaController.js";
import { authenticateToken, authorizeTypes } from "../middlewares/Auth.js";

const categoriaRoutes = e.Router();

categoriaRoutes.get("/categoria", authenticateToken, authorizeTypes(['bibliotecario']), CategoriaController.findAll);
categoriaRoutes.get("/categoria/:id",  authenticateToken, authorizeTypes(['bibliotecario']), CategoriaController.findById);
categoriaRoutes.post("/categoria",  authenticateToken, authorizeTypes(['bibliotecario']), CategoriaController.create);
categoriaRoutes.put("/categoria/:id",  authenticateToken, authorizeTypes(['bibliotecario']), CategoriaController.update);
categoriaRoutes.delete("/categoria/:id",  authenticateToken, authorizeTypes(['bibliotecario']), CategoriaController.delete);

export default categoriaRoutes;