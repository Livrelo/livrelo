import e from "express";
import EmprestimoController from "../controllers/emprestimoController.js";
import { authenticateToken, authorizeTypes } from "../middlewares/Auth.js";

const emprestimoRouter = e.Router();

emprestimoRouter.get("/emprestimos",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), EmprestimoController.findAll);
emprestimoRouter.get("/emprestimos/:cpf",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), EmprestimoController.findByCPF);
emprestimoRouter.get("/emprestimo/:idEmprestimo",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), EmprestimoController.findByID);
emprestimoRouter.get("/emprestimosAtrasados",  authenticateToken, authorizeTypes(['bibliotecario']), EmprestimoController.findEmprestimosEmAtraso);
emprestimoRouter.get("/emprestimosAtrasados/:cpf",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), EmprestimoController.findEmprestimosEmAtrasoByCPF)
emprestimoRouter.post("/emprestimo/:idLivro",  authenticateToken, authorizeTypes(['bibliotecario']), EmprestimoController.create);
emprestimoRouter.put("/emprestimo/:idEmprestimo", authenticateToken, authorizeTypes(['bibliotecario']), EmprestimoController.update);

export default emprestimoRouter;