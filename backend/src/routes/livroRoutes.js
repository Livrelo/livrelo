import e from "express";
import LivroController from "../controllers/LivroController.js";

const livroRouter = e.Router();

livroRouter.get("/livro", LivroController.findAll);
livroRouter.get("/livro/:id", LivroController.findById);
livroRouter.post("/livro", LivroController.create);
livroRouter.put("/livro/:id", LivroController.update);
livroRouter.put("/livro/:id", LivroController.delete);

export default livroRouter;