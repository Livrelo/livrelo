import e from "express";
import DevolucaoController from "../controllers/devolucaoController.js"

const devolucaoRouter = e.Router();

devolucaoRouter.get("/devolucao", DevolucaoController.findAll);
devolucaoRouter.get("/devolucao/:idEmprestimo", DevolucaoController.findByID);
devolucaoRouter.post("/devolucao/:idEmprestimo", DevolucaoController.create);

export default devolucaoRouter;