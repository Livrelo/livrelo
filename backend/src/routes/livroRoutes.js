import e from "express";
import LivroController from "../controllers/LivroController.js";
import multerConfig from "../config/multerConfig.js";
import multer from "multer";
import { authenticateToken, authorizeTypes } from "../middlewares/Auth.js";

const livroRouter = e.Router();

const upload = multer(multerConfig);


livroRouter.get("/livro",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), LivroController.findAll);
livroRouter.get("/livro/:id",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), LivroController.findById);
livroRouter.post("/livro",  authenticateToken, authorizeTypes(['bibliotecario']), upload.single('livroImage'), LivroController.create);
livroRouter.put("/livro/:id",  authenticateToken, authorizeTypes(['bibliotecario']), LivroController.update);
livroRouter.delete("/livro/:id", authenticateToken, authorizeTypes(['bibliotecario']), LivroController.delete);

export default livroRouter;