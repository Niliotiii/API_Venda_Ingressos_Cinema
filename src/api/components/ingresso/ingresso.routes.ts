import express, { Router } from 'express';
import { IngressoController } from './ingresso.controller';

export class IngressoRoutes {
  private router: Router = Router();
  private controller: IngressoController;

  constructor() {
    this.controller = new IngressoController();
    this.init();
  }

  private init() {
    this.router.get('/', this.controller.getAllIngressos);
    this.router.get('/:id', this.controller.getIngressoById);
    this.router.post('/', this.controller.createIngresso);
    this.router.patch('/:id', this.controller.updateIngresso);
    this.router.delete('/:id', this.controller.deleteIngresso);
  }

  public routes(): Router {
    return this.router;
  }
}
