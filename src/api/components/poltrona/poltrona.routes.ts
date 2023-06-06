import express, { Router } from 'express';
import { PoltronaController } from './poltrona.controller';

export class PoltronaRoutes {
  private router: Router = Router();
  private controller: PoltronaController;

  constructor() {
    this.controller = new PoltronaController();
    this.init();
  }

  private init() {
    this.router.get('/', this.controller.getAllPoltronas);
    this.router.get('/:id', this.controller.getPoltronaById);
    this.router.post('/', this.controller.createPoltrona);
    this.router.patch('/:id', this.controller.updatePoltrona);
    this.router.delete('/:id', this.controller.deletePoltrona);
  }

  public routes(): Router {
    return this.router;
  }
}
