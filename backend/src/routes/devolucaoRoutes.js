import e from "express";
import devolucaoController from "../controllers/devolucaoController";

const devolucaoRouter = e.Router();

devolucaoRouter.get("/devolucao", devolucaoController.findAll);
devolucaoRouter.get("/devolucao/:id", devolucaoController.findByID);
devolucaoRouter.post("/devolucao", devolucaoController.create);

export default devolucaoRouter;