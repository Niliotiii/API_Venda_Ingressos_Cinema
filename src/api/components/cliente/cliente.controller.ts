import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/databases/mysql-datasource.config';
import { Cliente } from './cliente.entity';

export class ClienteController {

  public async getAllClientes(req: Request, res: Response) {

    const clientes = await AppDataSource.manager.find(Cliente)

    res.status(200).json({ dados: clientes });
  }

  public async getClienteById( req: Request, res: Response) {

    const clienteId = parseInt(req.params.id, 10);

    const cliente = await AppDataSource.manager.findOne(Cliente, { where: { id:clienteId }});

    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ message: 'Cliente não encontrado' });
    }
  }

  public async createCliente(req: Request, res: Response) {

    let { nome, cpf, rg, email, endereco, telefone } = req.body;

    let cliente = new Cliente();
    cliente.nome = nome;
    cliente.cpf = cpf;
    cliente.rg = rg;
    cliente.email = email;
    cliente.endereco = endereco;
    cliente.telefone = telefone;

    const _cliente = await AppDataSource.manager.save(cliente);

    res.status(201).json(_cliente);
  }

  public async updateCliente(req: Request, res: Response) {
    const clienteId = parseInt(req.params.id, 10);
    const { nome, cpf, rg, email, endereco, telefone } = req.body;

    const cliente = await AppDataSource.manager.findOne(Cliente, { where: { id:clienteId }} );

    if (cliente) {
      cliente.nome = nome;
      cliente.cpf = cpf;
      cliente.rg = rg;
      cliente.email = email;
      cliente.endereco = endereco;
      cliente.telefone = telefone;

      await AppDataSource.manager.save(cliente);

      res.json(cliente);
    } else {
      res.status(404).json({ message: 'Cliente não encontrado' });
    }
  }

  public async deleteCliente(req: Request, res: Response) {
    const clienteId = parseInt(req.params.id, 10);

    const cliente = await AppDataSource.manager.findOne(Cliente, { where: { id:clienteId }});

    if (cliente) {
      await AppDataSource.manager.remove(cliente);
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Cliente não encontrado' });
    }
  }

}