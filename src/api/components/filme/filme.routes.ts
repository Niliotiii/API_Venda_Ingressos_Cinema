import express, { Router } from 'express';
import { FilmeController } from './filme.controller';

export class FilmeRoutes {
  private router: Router = Router();
  private controller: FilmeController;

  constructor() {
    this.controller = new FilmeController();
    this.init();
  }

  private init() {
    this.router.get('/', this.controller.getAllFilmes);
    this.router.get('/:id', this.controller.getFilmeById);
    this.router.post('/', this.controller.createFilme);
    this.router.patch('/:id', this.controller.updateFilme);
    this.router.delete('/:id', this.controller.deleteFilme);
  }

  public routes(): Router {
    return this.router;
  }
}
