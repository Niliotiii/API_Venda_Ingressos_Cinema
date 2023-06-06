import express, { Router } from 'express';
import { SessaoController } from "./sessao.controller";

export class SessaoRoutes {
    private router: Router = Router();
    private controller: SessaoController;

    constructor() {
        this.controller = new SessaoController();
        this.init();
    }

    private init() {
        this.router.get('/', this.controller.getAllSessoes);
        this.router.get('/:id', this.controller.getSessaoById);
        this.router.post('/', this.controller.createSessao);
        this.router.patch('/:id', this.controller.updateSessao);
        this.router.delete('/:id', this.controller.deleteSessao);
    }

    public routes(): Router {
        return this.router;
    }
}
