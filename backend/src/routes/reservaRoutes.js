import e from "express"
import ReservaController from "../controllers/reservaController.js"

const reservaRouter = e.Router();

reservaRouter.get("/reserva", ReservaController.findAll);
reservaRouter.get("/reserva/:id", ReservaController.findById);
reservaRouter.post("/reserva", ReservaController.create);
reservaRouter.put("/reserva/:id", ReservaController.update);
reservaRouter.delete("/reserva/:id", ReservaController.delete);

export default reservaRouter;