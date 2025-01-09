import e from "express";
import LivroCategoriaController from "../controllers/LivroCategoriaController.js";


const livroCategoriaRoutes = e.Router();

livroCategoriaRoutes.get("/livrocategoria", LivroCategoriaController.findAll);
livroCategoriaRoutes.get("/livrocategoria/livro/:id", LivroCategoriaController.findCategoriasByLivroId);
livroCategoriaRoutes.get("/livrocategoria/categoria/:id", LivroCategoriaController.findLivrosByCategoriaId);
livroCategoriaRoutes.post("/livrocategoria", LivroCategoriaController.create);
livroCategoriaRoutes.delete("/livrocategoria/livro/:id", LivroCategoriaController.deleteByLivroId); // caso de delete de um livro.
livroCategoriaRoutes.delete("livrocategoria/categoria/:id", LivroCategoriaController.deleteByIdCategoria);


export default livroCategoriaRoutes;