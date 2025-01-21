import e from "express";
import EmprestimoController from "../controllers/emprestimoController.js";
import { authenticateToken, authorizeTypes } from "../middlewares/Auth.js";

const emprestimoRouter = e.Router();

emprestimoRouter.get("/emprestimos", EmprestimoController.findAll);
emprestimoRouter.get("/emprestimos/:cpf", EmprestimoController.findByCPF);
emprestimoRouter.get("/emprestimo/:idEmprestimo", EmprestimoController.findByID);
emprestimoRouter.get("/emprestimosAtrasados", EmprestimoController.findEmprestimosEmAtraso);
emprestimoRouter.get("/emprestimosAtrasados/:cpf", EmprestimoController.findEmprestimosEmAtrasoByCPF)
emprestimoRouter.post("/emprestimo/:idLivro", EmprestimoController.create);
emprestimoRouter.put("/emprestimo/:idEmprestimo", EmprestimoController.update);

export default emprestimoRouter;