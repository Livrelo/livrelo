import e from "express"
import ReservaController from "../controllers/reservaController.js"
import { authorizeTypes, authenticateToken } from "../middlewares/Auth.js";

const reservaRouter = e.Router();

reservaRouter.get("/reserva",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), ReservaController.findAll);
reservaRouter.get("/reserva/:id",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), ReservaController.findById);
reservaRouter.get("/reserva/cpf/:cpf", authenticateToken, authorizeTypes(['bibliotecario','usuario']), ReservaController.findByCPF);
reservaRouter.post("/reserva", authenticateToken, authorizeTypes(['usuario']), ReservaController.create);
reservaRouter.put("/reserva/:id",  authenticateToken, authorizeTypes(['bibliotecario']), ReservaController.update);
reservaRouter.delete("/reserva/:id",  authenticateToken, authorizeTypes(['bibliotecario']), ReservaController.delete);
reservaRouter.put("/reserva/cancelamento/:id",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), ReservaController.cancel);

export default reservaRouter;