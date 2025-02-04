import e from "express";
import EmprestimoController from "../controllers/emprestimoController.js";
import { authenticateToken, authorizeTypes } from "../middlewares/Auth.js";
import mediator1 from "./mediator1.js";

const emprestimoRouter = e.Router();

emprestimoRouter.get("/emprestimos",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), async (req, res) => {
    try {
        await mediator1.handle('emprestimo.findAll', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
emprestimoRouter.get("/emprestimos/:cpf",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), async (req, res) => {
    try {
        await mediator1.handle('emprestimo.findByCPF', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
emprestimoRouter.get("/emprestimo/:idEmprestimo",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), async (req, res) => {
    try {
        await mediator1.handle('emprestimo.findById', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
emprestimoRouter.get("/emprestimosAtrasados",  authenticateToken, authorizeTypes(['bibliotecario']), async (req, res) => {
    try {
        await mediator1.handle('emprestimo.findEmprestimoEmAtraso', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
emprestimoRouter.get("/emprestimosAtrasados/:cpf",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), async (req, res) => {
    try {
        await mediator1.handle('emprestimo.findEmprestimoEmAtrasoByCPF', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})
emprestimoRouter.post("/emprestimo/:idLivro",  authenticateToken, authorizeTypes(['bibliotecario']), async (req, res) => {
    try {
        await mediator1.handle('emprestimo.create', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
emprestimoRouter.put("/emprestimo/:idEmprestimo", authenticateToken, authorizeTypes(['bibliotecario']), async (req, res) => {
    try {
        await mediator1.handle('emprestimo.update', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default emprestimoRouter;