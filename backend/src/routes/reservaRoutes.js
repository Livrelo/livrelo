import e from "express"
import ReservaController from "../controllers/reservaController.js"
import { authorizeTypes, authenticateToken } from "../middlewares/Auth.js";

const reservaRouter = e.Router();

reservaRouter.get("/reserva", ReservaController.findAll);
reservaRouter.get("/reserva/:id", ReservaController.findById);
reservaRouter.post("/reserva", authenticateToken, authorizeTypes(['usuario']), ReservaController.create);
reservaRouter.put("/reserva/:id", ReservaController.update);
reservaRouter.delete("/reserva/:id", ReservaController.delete);
reservaRouter.put("/reserva/cancelamento/:id", ReservaController.cancel);

export default reservaRouter;