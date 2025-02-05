import e from "express";
import LivroCategoriaController from "../controllers/LivroCategoriaController.js";
import { authenticateToken, authorizeTypes } from "../middlewares/Auth.js";
import mediator1 from "./mediator1.js";


const livroCategoriaRoutes = e.Router();

livroCategoriaRoutes.get("/livrocategoria",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), async (req, res) => {
        try {
            await mediator1.handle('livroCategoria.findAll', req, res);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
livroCategoriaRoutes.get("/livrocategoria/livro/:id",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), async (req, res) => {
        try {
            await mediator1.handle('livroCategoria.findCategoriaByLivroId', req, res);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
livroCategoriaRoutes.get("/livrocategoria/categoria/:id",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), async (req, res) => {
        try {
            await mediator1.handle('livroCategoria.findLivrosByCategoriaId', req, res);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
livroCategoriaRoutes.post("/livrocategoria",  authenticateToken, authorizeTypes(['bibliotecario']), async (req, res) => {
        try {
            await mediator1.handle('livroCategoria.create', req, res);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
livroCategoriaRoutes.delete("/livrocategoria/livro/:id",  authenticateToken, authorizeTypes(['bibliotecario']), async (req, res) => {
        try {
            await mediator1.handle('livroCategoria.deleteByLivroId', req, res);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }); // caso de delete de um livro.
livroCategoriaRoutes.delete("/livrocategoria/categoria/:id",  authenticateToken, authorizeTypes(['bibliotecario']), async (req, res) => {
        try {
            await mediator1.handle('livroCategoria.deleteByIdCategoria', req, res);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });


export default livroCategoriaRoutes;