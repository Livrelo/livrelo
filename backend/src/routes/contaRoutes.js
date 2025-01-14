import e from "express";
import { authenticateToken } from "../middlewares/Auth.js";
import SessionController from "../controllers/SessionController.js";
import ContaController from "../controllers/ContaController.js"

const contaRouter = e.Router();

contaRouter.post("/login", SessionController.login);
contaRouter.post("/logout", SessionController.logOut);
//contaRouter.get("/conta/:idConta", ContaController.findByIdConta);
contaRouter.post("/cadastro", SessionController.signin);
contaRouter.put("/conta/:idConta", authenticateToken, ContaController.update);
contaRouter.delete("/conta/:idConta", authenticateToken, ContaController.delete);

export default contaRouter;