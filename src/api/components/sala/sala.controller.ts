import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/databases/mysql-datasource.config';
import {Sala} from "./sala.entity";


export class SalaController {

    public async getAllSalas(req: Request, res: Response) {

        const salas = await AppDataSource.manager.find(Sala);

        res.status(200).json({ dados: salas });
    }

    public async getSalaById( req: Request, res: Response) {

        const salaId = parseInt(req.params.id, 10);

        const sala = await AppDataSource.manager.findOne(Sala, { where: { id:salaId }});

        if (sala) {
            res.json(sala);
        } else {
            res.status(404).json({ message: 'sala não encontrada' });
        }
    }

    public async createSala(req: Request, res: Response) {

        let { nome,capacidade,local_sala } = req.body;

        let sala = new Sala();
        sala.nome = nome;
        sala.capacidade = capacidade;
        sala.local_sala = local_sala;

        const _sala = await AppDataSource.manager.save(sala);

        res.status(201).json(_sala);
    }

    public async updateSala(req: Request, res: Response) {
        const salaId = parseInt(req.params.id, 10);
        let { nome,capacidade,local_sala } = req.body;

        const sala = await AppDataSource.manager.findOne(Sala, { where: { id:salaId }} );

        if (sala) {
            sala.nome = nome;
            sala.capacidade = capacidade;
            sala.local_sala = local_sala;

            await AppDataSource.manager.save(sala);

            res.json(sala);
        } else {
            res.status(404).json({ message: 'Sala não encontrada' });
        }
    }

    public async deleteSala(req: Request, res: Response) {
        const salaId = parseInt(req.params.id, 10);

        const sala = await AppDataSource.manager.findOne(Sala, { where: { id:salaId }});

        if (sala) {
            await AppDataSource.manager.remove(sala);
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Sala não encontrada' });
        }
    }

}