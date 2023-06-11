import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/databases/mysql-datasource.config';
import { Poltrona } from './poltrona.entity';

export class PoltronaController {

  public async getAllPoltronas(req: Request, res: Response) {
    const poltronas = await AppDataSource.manager.find(Poltrona, { relations: ['sala_id'] });
  
    res.status(200).json({ dados: poltronas });
  }
  
  public async getPoltronaById(req: Request, res: Response) {
    const poltronaId = parseInt(req.params.id, 10);
  
    const poltrona = await AppDataSource.manager.findOne(Poltrona, { 
      where: { id: poltronaId },
      relations: ['sala_id']
    });
  
    if (poltrona) {
      res.json(poltrona);
    } else {
      res.status(404).json({ message: 'Poltrona não encontrada' });
    }
  }  

  public async createPoltrona(req: Request, res: Response) {

    let { fileira, numero, sala_id} = req.body;

    let poltrona = new Poltrona();
    poltrona.fileira = fileira;
    poltrona.numero = numero;
    poltrona.sala_id = sala_id;

    const _poltrona = await AppDataSource.manager.save(poltrona);

    res.status(201).json(_poltrona);
  }

  public async updatePoltrona(req: Request, res: Response) {
    const poltronaId = parseInt(req.params.id, 10);
    const { fileira, numero, sala_id } = req.body;

    const poltrona = await AppDataSource.manager.findOne(Poltrona, { where: { id:poltronaId }} );

    if (poltrona) {
        poltrona.fileira = fileira;
        poltrona.numero = numero;
        poltrona.sala_id = sala_id;

      await AppDataSource.manager.save(poltrona);

      res.json(poltrona);
    } else {
      res.status(404).json({ message: 'Poltrona não encontrado' });
    }
  }

  public async deletePoltrona(req: Request, res: Response) {
    const poltronaId = parseInt(req.params.id, 10);

    const poltrona = await AppDataSource.manager.findOne(Poltrona, { where: { id:poltronaId }});

    if (poltrona) {
      await AppDataSource.manager.remove(poltrona);
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Poltrona não encontrado' });
    }
  }

}