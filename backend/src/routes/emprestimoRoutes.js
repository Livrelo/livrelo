import e from "express";
import emprestimoController from "../controllers/emprestimoController";

const emprestimoRouter = e.Router();

emprestimoRouter.get("/emprestimos", emprestimoController.findAll);
emprestimoRouter.get("/emprestimos/:cpf", emprestimoController.findByCPF);
emprestimoRouter.get("/emprestimos/:id", emprestimoController.findByID);
emprestimoRouter.get("/emprestimosAtrasados", emprestimoController.findEmprestimosEmAtraso);
emprestimoRouter.post("/emprestimo", emprestimoController.create);
emprestimoRouter.put("/emprestimo/:id", emprestimoController.update);

export default emprestimoRouter;