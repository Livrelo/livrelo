// import e from "express"
// import ReservaController from "../controllers/reservaController.js"
// import { authorizeTypes, authenticateToken } from "../middlewares/Auth.js";

// const reservaRouter = e.Router();

// reservaRouter.get("/reserva",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), ReservaController.findAll);
// reservaRouter.get("/reserva/:id",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), ReservaController.findById);
// reservaRouter.get("/reserva/cpf/:cpf", authenticateToken, authorizeTypes(['bibliotecario','usuario']), ReservaController.findByCPF);
// reservaRouter.post("/reserva", authenticateToken, authorizeTypes(['usuario']), ReservaController.create);
// reservaRouter.put("/reserva/:id",  authenticateToken, authorizeTypes(['bibliotecario']), ReservaController.update);
// reservaRouter.delete("/reserva/:id",  authenticateToken, authorizeTypes(['bibliotecario']), ReservaController.delete);
// reservaRouter.put("/reserva/cancelamento/:id",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), ReservaController.cancel);

// export default reservaRouter;
import e from "express"
import { authorizeTypes, authenticateToken } from "../middlewares/Auth.js";
import mediator1 from "./mediator1.js";

const reservaRouter = e.Router();

reservaRouter.get("/reserva", authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), 
    async (req, res) => {
        try {
            await mediator1.handle('reserva.findAll', req, res);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
);

reservaRouter.get("/reserva/:id", authenticateToken, authorizeTypes(['bibliotecario', 'usuario']),
    async (req, res) => {
        try {
            await mediator1.handle('reserva.findById', req, res);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
);

reservaRouter.post("/reserva", authenticateToken, authorizeTypes(['usuario']),
    async (req, res) => {
        try {
            await mediator1.handle('reserva.create', req, res);
            // res.status(201).json(result);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
);
reservaRouter.get("/reserva/cpf/:cpf", authenticateToken, authorizeTypes(['bibliotecario','usuario']), 
    async (req, res) => {
        try {
            const resp = await mediator1.handle('reserva.findByCPF', req, res);
            console.log(resp)
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
);
reservaRouter.put("/reserva/:id",  authenticateToken, authorizeTypes(['bibliotecario']), 
    async (req, res) => {
        try {
            await mediator1.handle('reserva.update', req, res);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
});

reservaRouter.delete("/reserva/:id",  authenticateToken, authorizeTypes(['bibliotecario']), 
async (req, res) => {
    try {
        await mediator1.handle('reserva.delete', req, res)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
reservaRouter.put("/reserva/cancelamento/:id",  authenticateToken, authorizeTypes(['bibliotecario', 'usuario']), 
async (req, res) => {
    try {
        await mediator1.handle('reserva.cancel', req, res)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default reservaRouter;