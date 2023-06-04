import express, { Router } from 'express';
import { ClassificacaoController } from './classificacao.controller';

export class ClassificacaoRoutes {
  private router: Router = Router();
  private controller: ClassificacaoController;

  constructor() {
    this.controller = new ClassificacaoController();
    this.init();
  }

  private init() {
    this.router.get('/', this.controller.getAllClassificacao);
    this.router.get('/:id', this.controller.getClassificacaoById);
    this.router.post('/', this.controller.createClassificacao);
    this.router.patch('/:id', this.controller.updateClassificacao);
    this.router.delete('/:id', this.controller.deleteClassificacao);
  }

  public routes(): Router {
    return this.router;
  }
}
