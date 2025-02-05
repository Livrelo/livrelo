import e from "express";
import { authenticateToken } from "../middlewares/Auth.js";
import SessionController from "../controllers/SessionController.js";
import ContaController from "../controllers/ContaController.js"
import mediator1 from "./mediator1.js";
const contaRouter = e.Router();

// contaRouter.post("/login", SessionController.login);
// contaRouter.post("/logout", SessionController.logOut);
// contaRouter.get("/conta/:idConta", ContaController.findByIdConta);
// contaRouter.post("/cadastro", SessionController.signin);
// contaRouter.put("/conta/:idConta", authenticateToken, ContaController.update);
// contaRouter.delete("/conta/:idConta", authenticateToken, ContaController.delete);
contaRouter.post("/login", async (req, res) => {
    try {
        await mediator1.handle('conta.login', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
contaRouter.post("/logout", async (req, res) => {
    try {
        await mediator1.handle('conta.logout', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// contaRouter.get("/conta/:idConta", ContaController.findByIdConta async (req, res) => {
//     try {
//          await mediator1.handle('reserva.findAll', req, res);
//         
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });
contaRouter.post("/cadastro", async (req, res) => {
    try {
        await mediator1.handle('conta.cadastro', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
contaRouter.put("/conta/:idConta", authenticateToken, async (req, res) => {
    try {
        await mediator1.handle('conta.update', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
contaRouter.delete("/conta/:idConta", authenticateToken, async (req, res) => {
    try {
        await mediator1.handle('conta.delete', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
export default contaRouter;