import e from "express";
import ContaController from "../controllers/ContaController.js"

const contaRouter = e.Router();

contaRouter.get("/conta/logIn", ContaController.logIn);
contaRouter.get("/conta", ContaController.logOut);
//contaRouter.get("/conta/:idConta", ContaController.findByIdConta);
contaRouter.post("/conta/signUp", ContaController.create);
contaRouter.put("/conta/:idConta", ContaController.update);
contaRouter.delete("/conta/:idConta", ContaController.delete);

export default contaRouter;