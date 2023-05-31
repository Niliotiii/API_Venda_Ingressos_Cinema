import { Request, Response } from 'express';

export class BaseController {
  
  public index(req: Request, res: Response) {
    res.status(200).json({ message: 'Api running....' });
  }

  public info(req: Request, res: Response) {
    res.status(200).json({
      name: 'API_Venda_Ingressos_Cinema',
      mode: 'development',
      version: '1.0.0',
    });
  }

  public dev(req: Request, res: Response) {
    res.status(200).json({
      desenvolvedor: 'Danilo Saiter da Silva, Caian Henrique Soares de Oliveira',
      email: 'danilosaiter@hotmail.com, caianhenrique10@gmail.com',
      github: 'https://github.com/Niliotiii, https://github.com/CaianH',
    });
  }
}