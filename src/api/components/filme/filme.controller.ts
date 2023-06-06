import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/databases/mysql-datasource.config';
import { Filme } from './filme.entity';

export class FilmeController {

  public async getAllFilmes(req: Request, res: Response) {

    const filmes = await AppDataSource.manager.find(Filme)

    res.status(200).json({ dados: filmes });
  }

  public async getFilmeById( req: Request, res: Response) {

    const filmeId = parseInt(req.params.id, 10);

    const filme = await AppDataSource.manager.findOne(Filme, { where: { id:filmeId }});

    if (filme) {
      res.json(filme);
    } else {
      res.status(404).json({ message: 'Filme não encontrado' });
    }
  }

  public async createFilme(req: Request, res: Response) {

    let { titulo, sinopse, atores, diretor, tempo} = req.body;

    let filme = new Filme();
    filme.titulo = titulo;
    filme.sinopse = sinopse;
    filme.atores = atores;
    filme.diretor = diretor;
    filme.tempo = tempo;

    const _filme = await AppDataSource.manager.save(filme);

    res.status(201).json(_filme);
  }

  public async updateFilme(req: Request, res: Response) {
    const filmeId = parseInt(req.params.id, 10);
    const { titulo, sinopse, atores, diretor, tempo } = req.body;

    const filme = await AppDataSource.manager.findOne(Filme, { where: { id:filmeId }} );

    if (filme) {
        filme.titulo = titulo;
        filme.sinopse = sinopse;
        filme.atores = atores;
        filme.diretor = diretor;
        filme.tempo = tempo;

      await AppDataSource.manager.save(filme);

      res.json(filme);
    } else {
      res.status(404).json({ message: 'Filme não encontrado' });
    }
  }

  public async deleteFilme(req: Request, res: Response) {
    const filmeId = parseInt(req.params.id, 10);

    const filme = await AppDataSource.manager.findOne(Filme, { where: { id:filmeId }});

    if (filme) {
      await AppDataSource.manager.remove(filme);
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Filme não encontrado' });
    }
  }

}