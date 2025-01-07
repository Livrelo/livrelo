import e from "express";
import devolucaoController from "../controllers/DevolucaoController";

const devolucaoRouter = e.Router();

devolucaoRouter.get("/devolucao", devolucaoController.findAll);
devolucaoRouter.get("/devolucao/:idEmprestimo", devolucaoController.findByID);
devolucaoRouter.post("/devolucao", devolucaoController.create);

export default devolucaoRouter;