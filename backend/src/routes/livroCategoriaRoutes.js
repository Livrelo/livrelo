import e from "express";
import LivroCategoriaController from "../controllers/LivroCategoriaController.js";
import { authenticateToken, authorizeTypes } from "../middlewares/Auth.js";


const livroCategoriaRoutes = e.Router();

livroCategoriaRoutes.get("/livrocategoria",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), LivroCategoriaController.findAll);
livroCategoriaRoutes.get("/livrocategoria/livro/:id",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), LivroCategoriaController.findCategoriasByLivroId);
livroCategoriaRoutes.get("/livrocategoria/categoria/:id",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), LivroCategoriaController.findLivrosByCategoriaId);
livroCategoriaRoutes.post("/livrocategoria",  authenticateToken, authorizeTypes(['bibliotecario']), LivroCategoriaController.create);
livroCategoriaRoutes.delete("/livrocategoria/livro/:id",  authenticateToken, authorizeTypes(['bibliotecario']), LivroCategoriaController.deleteByLivroId); // caso de delete de um livro.
livroCategoriaRoutes.delete("/livrocategoria/categoria/:id",  authenticateToken, authorizeTypes(['bibliotecario']), LivroCategoriaController.deleteByIdCategoria);


export default livroCategoriaRoutes;