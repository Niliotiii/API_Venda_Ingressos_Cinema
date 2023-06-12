import express, { Router } from 'express';
import {VendaController} from "./venda.controller";

export class VendaRoutes {
    private router: Router = Router();
    private controller: VendaController;

    constructor() {
        this.controller = new VendaController();
        this.init();
    }

    private init() {
        this.router.get('/', this.controller.getAllVenda);
        this.router.get('/:id', this.controller.getVendaById);
        this.router.post('/', this.controller.createVenda);
        this.router.patch('/:id', this.controller.updateVenda);
        this.router.delete('/:id', this.controller.deleteVenda);
    }

    public routes(): Router {
        return this.router;
    }
}
