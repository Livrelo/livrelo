import e from "express";
import UsuarioController from "../controllers/UsuarioController.js";
import { authenticateToken, authorizeTypes } from "../middlewares/Auth.js";

const usuarioRouter = e.Router();

usuarioRouter.get("/usuario/:idConta",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), UsuarioController.findByIdConta);
usuarioRouter.post("/usuario", UsuarioController.create);
usuarioRouter.put("/usuario/:cpf",   authenticateToken, authorizeTypes(['usuario']), UsuarioController.update); // Consegue atualizar, mas não a PK e FK, elas não podem ser alteradas
usuarioRouter.delete("/usuario/:cpf",  authenticateToken, authorizeTypes(['usuario']), UsuarioController.delete);

export default usuarioRouter;