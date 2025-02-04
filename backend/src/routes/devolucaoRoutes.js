import e from "express";
import DevolucaoController from "../controllers/devolucaoController.js"
import { authenticateToken, authorizeTypes } from "../middlewares/Auth.js";

const devolucaoRouter = e.Router();

devolucaoRouter.get("/devolucao", DevolucaoController.findAll);
devolucaoRouter.get("/devolucao/:idEmprestimo", DevolucaoController.findByID);
devolucaoRouter.post("/devolucao/:idEmprestimo",  authenticateToken, authorizeTypes(['bibliotecario']), DevolucaoController.create);

export default devolucaoRouter;