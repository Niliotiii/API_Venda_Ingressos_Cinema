import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/databases/mysql-datasource.config';
import {Sessao} from "./sessao.entity";
import {validate} from "class-validator";

export class SessaoController {

    public async getAllSessoes(req: Request, res: Response) {

        const sessoes = await AppDataSource.manager.find(Sessao)

        res.status(200).json({ dados: sessoes });
    }

    public async getSessaoById( req: Request, res: Response) {
        const sessaoId = parseInt(req.params.id, 10);
  
        const sessao = await AppDataSource.manager.findOne(Sessao, { 
          where: { id: sessaoId },
          relations: ['sala_id', 'filme_id']
        });
      
        if (sessao) {
          res.json(sessao);
        } else {
          res.status(404).json({ message: 'Sessão não encontrada' });
        }
    }

    public async createSessao(req: Request, res: Response) {

        let { data,horario_inicio,horario_fim, sala_id,filme_id} = req.body;

        let sessao = new Sessao();
        sessao.data = data;
        sessao.horario_inicio = horario_inicio;
        sessao.horario_fim = horario_fim;
        sessao.sala_id = sala_id;
        sessao.filme_id = filme_id;

        const erros = await validate(sessao);
        if (erros.length > 0){
            return res.status(400).json(erros);
        }

        const _sessao = await AppDataSource.manager.save(sessao);

        res.status(201).json(_sessao);
    }

    public async updateSessao(req: Request, res: Response) {
        const sessaoId = parseInt(req.params.id, 10);
        let { data,horario_inicio,horario_fim, sala_id,filme_id} = req.body;

        const sessao = await AppDataSource.manager.findOne(Sessao, { where: { id:sessaoId }} );

        if (sessao) {
            sessao.data = data;
            sessao.horario_inicio = horario_inicio;
            sessao.horario_fim = horario_fim;
            sessao.sala_id = sala_id;
            sessao.filme_id = filme_id;

            const erros = await validate(sessao);
            if (erros.length > 0){
                return res.status(400).json(erros);
            }
            await AppDataSource.manager.save(sessao);

            res.json(sessao);
        } else {
            res.status(404).json({ message: 'sessao não encontrado' });
        }
    }

    public async deleteSessao(req: Request, res: Response) {
        const sessaoId = parseInt(req.params.id, 10);

        const sessao = await AppDataSource.manager.findOne(Sessao, { where: { id:sessaoId }});

        if (sessao) {
            await AppDataSource.manager.remove(sessao);
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'sessao não encontrado' });
        }
    }

}