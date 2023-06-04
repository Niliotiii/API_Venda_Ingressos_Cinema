import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/databases/mysql-datasource.config';
import { Classificao } from './classificacao.entity';

export class ClassificacaoController {

  public async getAllClassificacao(req: Request, res: Response) {

    const classificacao = await AppDataSource.manager.find(Classificao)

    res.status(200).json({ dados: classificacao });
  }

  public async getClassificacaoById( req: Request, res: Response) {

    const classificacaoId = parseInt(req.params.id, 10);

    const classificacao = await AppDataSource.manager.findOne(Classificao, { where: { id:classificacaoId }});

    if (classificacao) {
      res.json(classificacao);
    } else {
      res.status(404).json({ message: 'Classificação não encontrada' });
    }
  }

  public async createClassificacao(req: Request, res: Response) {

    let { nome } = req.body;

    let classificacao = new Classificao();
    classificacao.nome = nome;

    const _classificacao = await AppDataSource.manager.save(classificacao);

    res.status(201).json(_classificacao);
  }

  public async updateClassificacao(req: Request, res: Response) {
    const classificacaoId = parseInt(req.params.id, 10);
    const { nome } = req.body;

    const classificacao = await AppDataSource.manager.findOne(Classificao, { where: { id:classificacaoId }} );

    if (classificacao) {
      classificacao.nome = nome;

      await AppDataSource.manager.save(classificacao);

      res.json(classificacao);
    } else {
      res.status(404).json({ message: 'Classificação não encontrada' });
    }
  }

  public async deleteClassificacao(req: Request, res: Response) {
    const classificacaoId = parseInt(req.params.id, 10);

    const classificacao = await AppDataSource.manager.findOne(Classificao, { where: { id:classificacaoId }});

    if (classificacao) {
      await AppDataSource.manager.remove(classificacao);
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Classificação não encontrada' });
    }
  }

}