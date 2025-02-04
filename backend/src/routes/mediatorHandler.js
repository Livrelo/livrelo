import BibliotecarioController from "../controllers/bibliotecarioControllers.js"
import CategoriaController from "../controllers/CategoriaController.js";
import SessionController from "../controllers/SessionController.js";
import ContaController from "../controllers/ContaController.js";
import DevolucaoController from "../controllers/devolucaoController.js";
import EmprestimoController from "../controllers/emprestimoController.js";
import LivroCategoriaController from "../controllers/LivroCategoriaController.js";
import ReservaController from "../controllers/reservaController.js";
import LivroController from "../controllers/LivroController.js";
import UsuarioController from "../controllers/UsuarioController.js";
import mediator1 from "./mediator1.js";

console.log("Registrando handlers do mediator...");
mediator1.register('bibliotecario.findAll', BibliotecarioController.findAll)
mediator1.register('bibliotecario.findById', BibliotecarioController.findById)
mediator1.register('bibliotecario.create', BibliotecarioController.create)
mediator1.register('categoria.findAll', CategoriaController.findAll)
mediator1.register('categoria.findById', CategoriaController.findById)
mediator1.register('categoria.create', CategoriaController.create)
mediator1.register('categoria.update', CategoriaController.update)
mediator1.register('categoria.delete', CategoriaController.delete)
mediator1.register('conta.login', SessionController.login)
mediator1.register('conta.logout', SessionController.logOut)
mediator1.register('conta.cadastro', SessionController.signin)
mediator1.register('conta.update', ContaController.update)
mediator1.register('conta.delete',ContaController.delete)
mediator1.register('devolucao.findAll', DevolucaoController.findAll)
mediator1.register('devolucao.findById', DevolucaoController.findByID)
mediator1.register('devolucao.create', DevolucaoController.create)
mediator1.register('emprestimo.findAll', EmprestimoController.findAll)
mediator1.register('emprestimo.findByCPF', EmprestimoController.findByCPF)
mediator1.register('emprestimo.findById', EmprestimoController.findByID)
mediator1.register('emprestimo.findEmprestimoEmAtraso', EmprestimoController.findEmprestimosEmAtraso)
mediator1.register('emprestimo.findEmprestimoEmAtrasoByCPF', EmprestimoController.findEmprestimosEmAtrasoByCPF)
mediator1.register('emprestimo.create', EmprestimoController.create)
mediator1.register('emprestimo.update', EmprestimoController.update)
mediator1.register('livroCategoria.findAll', LivroCategoriaController.findAll)
mediator1.register('livroCategoria.findCategoriaByLivroId', LivroCategoriaController.findCategoriasByLivroId)
mediator1.register('livroCategoria.findLivrosByCategoriaId', LivroCategoriaController.findLivrosByCategoriaId)
mediator1.register('livroCategoria.create', LivroCategoriaController.create)
mediator1.register('livroCategoria.deleteByLivroId', LivroCategoriaController.deleteByLivroId)
mediator1.register('livroCategoria.deleteByIdCategoria', LivroCategoriaController.deleteByIdCategoria)
mediator1.register('livro.findAll', LivroController.findAll)
mediator1.register('livro.findById', LivroController.findById)
mediator1.register('livro.create', LivroController.create)
mediator1.register('livro.update', LivroController.update)
mediator1.register('livro.delete', LivroController.delete)
mediator1.register('reserva.findAll', ReservaController.findAll);
mediator1.register('reserva.findById', ReservaController.findById);
mediator1.register('reserva.findByCPF', ReservaController.findByCPF);
mediator1.register('reserva.create', ReservaController.create);
mediator1.register('reserva.update', ReservaController.update);
mediator1.register('reserva.delete', ReservaController.delete);
mediator1.register('reserva.cancel', ReservaController.cancel);
mediator1.register('usuario.findById', UsuarioController.findByIdConta);
mediator1.register('usuario.create', UsuarioController.create);
mediator1.register('usuario.update', UsuarioController.update);
mediator1.register('usuario.delete', UsuarioController.delete);