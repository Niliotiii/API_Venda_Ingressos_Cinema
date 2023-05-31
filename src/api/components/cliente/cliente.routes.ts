import express, { Router } from 'express';
import { ClienteController } from './cliente.controller';

export class ClienteRoutes {
  private router: Router = Router();
  private controller: ClienteController;

  constructor() {
    this.controller = new ClienteController();
    this.init();
  }

  private init() {
    this.router.get('/', this.controller.getAllClientes);
    this.router.get('/:id', this.controller.getClienteById);
    this.router.post('/', this.controller.createCliente);
    this.router.patch('/:id', this.controller.updateCliente);
    this.router.delete('/:id', this.controller.deleteCliente);
  }

  public routes(): Router {
    return this.router;
  }
}
