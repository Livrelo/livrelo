import e from "express";
import LivroController from "../controllers/LivroController.js";
import multerConfig from "../config/multerConfig.js";
import multer from "multer";
import { authenticateToken, authorizeTypes } from "../middlewares/Auth.js";
import mediator1 from "./mediator1.js";

const livroRouter = e.Router();

const upload = multer(multerConfig);


livroRouter.get("/livro",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), async (req, res) => {
    try {
        const resp = await mediator1.handle('livro.findAll', req, res);
        console.log("livros: ", resp)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
livroRouter.get("/livro/:id",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), async (req, res) => {
    try {
        await mediator1.handle('livro.findById', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
livroRouter.post("/livro",  authenticateToken, authorizeTypes(['bibliotecario']), upload.single('livroImage'), async (req, res) => {
    try {
        await mediator1.handle('livro.create', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
livroRouter.put("/livro/:id",  authenticateToken, authorizeTypes(['bibliotecario']), async (req, res) => {
    try {
        await mediator1.handle('livro.update', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
livroRouter.delete("/livro/:id", authenticateToken, authorizeTypes(['bibliotecario']), async (req, res) => {
    try {
        await mediator1.handle('livro.delete', req, res);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default livroRouter;