import express, { Router } from 'express';
import {SalaController} from "./sala.controller";

export class SalaRoutes {
    private router: Router = Router();
    private controller: SalaController;

    constructor() {
        this.controller = new SalaController();
        this.init();
    }

    private init() {
        this.router.get('/', this.controller.getAllSalas);
        this.router.get('/:id', this.controller.getSalaById);
        this.router.post('/', this.controller.createSala);
        this.router.patch('/:id', this.controller.updateSala);
        this.router.delete('/:id', this.controller.deleteSala);
    }

    public routes(): Router {
        return this.router;
    }
}
