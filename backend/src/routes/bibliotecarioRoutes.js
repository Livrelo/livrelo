import e from "express"
import BibliotecarioController from "../controllers/bibliotecarioControllers.js";
import mediator1 from "./mediator1.js";

const bibliotecarioRouter = e.Router();

bibliotecarioRouter.get("/bibliotecario", async (req, res) => {
    try {
        await mediator1.handle('bibliotecario.findAll', req, res);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
bibliotecarioRouter.get("/bibliotecario/:id", async (req, res) => {
    try {
        await mediator1.handle('bibliotecario.findById', req, res);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
bibliotecarioRouter.post("/bibliotecario", async (req, res) => {
    try {
        await mediator1.handle('bibliotecario.create', req, res);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default bibliotecarioRouter;