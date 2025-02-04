import e from "express";
import DevolucaoController from "../controllers/devolucaoController.js"
import { authenticateToken, authorizeTypes } from "../middlewares/Auth.js";
import mediator1 from "./mediator1.js";

const devolucaoRouter = e.Router();

devolucaoRouter.get("/devolucao", async (req, res) => {
    try {
        await mediator1.handle('devolucao.findAll', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
devolucaoRouter.get("/devolucao/:idEmprestimo", async (req, res) => {
    try {
        await mediator1.handle('devolucao.findById', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
devolucaoRouter.post("/devolucao/:idEmprestimo",  authenticateToken, authorizeTypes(['bibliotecario']), async (req, res) => {
    try {
        await mediator1.handle('devolucao.create', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default devolucaoRouter;