import e from "express"
import BibliotecarioController from "../controllers/bibliotecarioControllers.js"

const bibliotecarioRouter = e.Router();

bibliotecarioRouter.get("/bibliotecario", BibliotecarioController.findAll);
bibliotecarioRouter.get("/bibliotecario/:id", BibliotecarioController.findById);
bibliotecarioRouter.post("/bibliotecario", BibliotecarioController.create);

export default bibliotecarioRouter;