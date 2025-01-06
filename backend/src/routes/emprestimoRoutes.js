import e from "express";
import emprestimoController from "../controllers/emprestimoController.js";

const emprestimoRouter = e.Router();

emprestimoRouter.get("/emprestimos", emprestimoController.findAll);
emprestimoRouter.get("/emprestimos/:cpf", emprestimoController.findByCPF);
emprestimoRouter.get("/emprestimo/:idEmprestimo", emprestimoController.findByID);
emprestimoRouter.get("/emprestimosAtrasados", emprestimoController.findEmprestimosEmAtraso);
emprestimoRouter.post("/emprestimo/:idReserva/:idLivro", emprestimoController.create);
emprestimoRouter.put("/emprestimo/:idEmprestimo", emprestimoController.update);

export default emprestimoRouter;