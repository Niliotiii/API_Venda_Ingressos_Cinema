import { Request, Response } from 'express';
import { AppDataSource } from '../../../config/databases/mysql-datasource.config';
import {Venda} from "./venda.entity";

export class VendaController {

    public async getAllVenda(req: Request, res: Response) {

        const vendas = await AppDataSource.manager.find(Venda)

        res.status(200).json({ dados: vendas });
    }

    public async getVendaById( req: Request, res: Response) {
        const vendaId = parseInt(req.params.id, 10);

        const venda = await AppDataSource.manager.findOne(Venda, {
            where: { id: vendaId },
            relations: ['cliente_id', 'ingresso_id']
        });

        if (venda) {
            res.json(venda);
        } else {
            res.status(404).json({ message: 'venda não encontrada' });
        }
    }

    public async createVenda(req: Request, res: Response) {

        let { valor,data,forma_pagamento,cliente_id,ingresso_id} = req.body;

        let venda = new Venda();
        venda.valor = valor;
        venda.data = data;
        venda.forma_pagamento = forma_pagamento;
        venda.cliente_id = cliente_id;
        venda.ingresso_id = ingresso_id;

        const _venda = await AppDataSource.manager.save(venda);

        res.status(201).json(_venda);
    }

    public async updateVenda(req: Request, res: Response) {
        const vendaId = parseInt(req.params.id, 10);
        let { valor,data,forma_pagamento,cliente_id,ingresso_id} = req.body;

        const venda = await AppDataSource.manager.findOne(Venda, { where: { id:vendaId }} );

        if (venda) {
            venda.valor = valor;
            venda.data = data;
            venda.forma_pagamento = forma_pagamento;
            venda.cliente_id = cliente_id;
            venda.ingresso_id = ingresso_id;

            await AppDataSource.manager.save(venda);

            res.json(venda);
        } else {
            res.status(404).json({ message: 'venda não encontrado' });
        }
    }

    public async deleteVenda(req: Request, res: Response) {
        const vendaId = parseInt(req.params.id, 10);

        const venda = await AppDataSource.manager.findOne(Venda, { where: { id:vendaId }});

        if (venda) {
            await AppDataSource.manager.remove(venda);
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'venda não encontrado' });
        }
    }

}