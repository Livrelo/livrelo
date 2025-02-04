import e from "express";

import CategoriaController from "../controllers/CategoriaController.js";
import { authenticateToken, authorizeTypes } from "../middlewares/Auth.js";
import mediator1 from "./mediator1.js";

const categoriaRoutes = e.Router();

categoriaRoutes.get("/categoria", authenticateToken, authorizeTypes(['bibliotecario']), async (req, res) => {
    try {
        await mediator1.handle('categoria.findAll', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
categoriaRoutes.get("/categoria/:id",  authenticateToken, authorizeTypes(['bibliotecario']), async (req, res) => {
    try {
        await mediator1.handle('categoria.findById', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
categoriaRoutes.post("/categoria",  authenticateToken, authorizeTypes(['bibliotecario']), async (req, res) => {
    try {
        await mediator1.handle('categoria.create', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
categoriaRoutes.put("/categoria/:id",  authenticateToken, authorizeTypes(['bibliotecario']), async (req, res) => {
    try {
        await mediator1.handle('categoria.update', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
categoriaRoutes.delete("/categoria/:id",  authenticateToken, authorizeTypes(['bibliotecario']), async (req, res) => {
    try {
        await mediator1.handle('categoria.delete', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default categoriaRoutes;