import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/databases/mysql-datasource.config';
import { Ingresso } from './ingresso.entity';

export class IngressoController {

  public async getAllIngressos(req: Request, res: Response) {
    const ingressos = await AppDataSource.manager.find(Ingresso, { relations: ['sessao_id', 'poltrona_id'] });
  
    res.status(200).json({ dados: ingressos });
  }
  
  public async getIngressoById(req: Request, res: Response) {
    const ingressoId = parseInt(req.params.id, 10);
  
    const ingresso = await AppDataSource.manager.findOne(Ingresso, { 
      where: { id: ingressoId },
      relations: ['sessao_id', 'poltrona_id']
    });
  
    if (ingresso) {
      res.json(ingresso);
    } else {
      res.status(404).json({ message: 'Ingresso não encontrada' });
    }
  }  

  public async createIngresso(req: Request, res: Response) {

    let { valor, data_hora, sessao_id, poltrona_id } = req.body;

    let ingresso = new Ingresso();
    ingresso.valor = valor;
    ingresso.data_hora = data_hora;
    ingresso.sessao_id = sessao_id;
    ingresso.poltrona_id = poltrona_id;

    const _ingresso = await AppDataSource.manager.save(ingresso);

    res.status(201).json(_ingresso);
  }

  public async updateIngresso(req: Request, res: Response) {
    const ingressoId = parseInt(req.params.id, 10);
    const { valor, data_hora, sessao_id, poltrona_id } = req.body;

    const ingresso = await AppDataSource.manager.findOne(Ingresso, { where: { id:ingressoId }} );

    if (ingresso) {
        ingresso.valor = valor;
        ingresso.data_hora = data_hora;
        ingresso.sessao_id = sessao_id;
        ingresso.poltrona_id = poltrona_id;

      await AppDataSource.manager.save(ingresso);

      res.json(ingresso);
    } else {
      res.status(404).json({ message: 'Ingresso não encontrado' });
    }
  }

  public async deleteIngresso(req: Request, res: Response) {
    const ingressoId = parseInt(req.params.id, 10);

    const ingresso = await AppDataSource.manager.findOne(Ingresso, { where: { id:ingressoId }});

    if (ingresso) {
      await AppDataSource.manager.remove(ingresso);
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Ingresso não encontrado' });
    }
  }

}