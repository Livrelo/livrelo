import e from "express";
import ContaController from "../controllers/ContaController.js"
import { authenticateToken } from "../middlewares/Auth.js";

const contaRouter = e.Router();

contaRouter.get("/conta/logIn", ContaController.logIn);
contaRouter.get("/conta", ContaController.logOut);
//contaRouter.get("/conta/:idConta", ContaController.findByIdConta);
contaRouter.post("/conta/signUp", ContaController.create);
contaRouter.put("/conta/:idConta", authenticateToken, ContaController.update);
contaRouter.delete("/conta/:idConta", authenticateToken, ContaController.delete);

export default contaRouter;