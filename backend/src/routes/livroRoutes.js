import e from "express";
import LivroController from "../controllers/LivroController.js";
import multerConfig from "../config/multerConfig.js";
import multer from "multer";

const livroRouter = e.Router();

const upload = multer(multerConfig);


livroRouter.get("/livro", LivroController.findAll);
livroRouter.get("/livro/:id", LivroController.findById);
livroRouter.post("/livro", upload.single('livroImage'), LivroController.create);
livroRouter.put("/livro/:id", LivroController.update);
livroRouter.delete("/livro/:id", LivroController.delete);

export default livroRouter;