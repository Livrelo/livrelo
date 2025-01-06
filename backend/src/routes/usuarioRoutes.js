import e from "express";
import UsuarioController from "../controllers/UsuarioController.js";

const usuarioRouter = e.Router();

usuarioRouter.get("/usuario/:idConta", UsuarioController.findByIdConta);
usuarioRouter.post("/usuario", UsuarioController.create);
usuarioRouter.put("/usuario/:cpf", UsuarioController.update);
usuarioRouter.put("/usuario/:cpf", UsuarioController.delete);

export default usuarioRouter;