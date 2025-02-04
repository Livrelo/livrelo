import e from "express";
import UsuarioController from "../controllers/UsuarioController.js";
import { authenticateToken, authorizeTypes } from "../middlewares/Auth.js";
import mediator1 from "./mediator1.js";

const usuarioRouter = e.Router();

usuarioRouter.get("/usuario/:idConta",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), async (req, res) => {
    try {
        await mediator1.handle('usuario.findById', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
usuarioRouter.post("/usuario", async (req, res) => {
    try {
        await mediator1.handle('usuario.create', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
usuarioRouter.put("/usuario/:cpf",   authenticateToken, authorizeTypes(['usuario']), async (req, res) => {
    try {
        await mediator1.handle('usuario.update', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}); // Consegue atualizar, mas não a PK e FK, elas não podem ser alteradas
usuarioRouter.delete("/usuario/:cpf",  authenticateToken, authorizeTypes(['usuario']), async (req, res) => {
    try {
        await mediator1.handle('usuario.delete', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default usuarioRouter;