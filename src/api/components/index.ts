import { Router } from 'express';
import { BaseRoutes } from './base/base.routes';
import { ClienteRoutes } from './cliente/cliente.routes';
import { SalaRoutes } from "./sala/sala.routes";
import { FilmeRoutes } from './filme/filme.routes';
import { PoltronaRoutes } from './poltrona/poltrona.routes';
import { SessaoRoutes } from "./sessao/sessao.routes";
import { IngressoRoutes } from './ingresso/ingresso.routes';


/**
 * Init component routes
 *
 * @param {Router} router
 * @param {string} prefix
 * @returns {void}
 */
export function registerRoutes(router: Router, prefix: string = ''): void {
  router.use(`${prefix}`, new BaseRoutes().routes());
  router.use(`${prefix}/cliente`, new ClienteRoutes().routes());
  router.use(`${prefix}/sala`, new SalaRoutes().routes());
  router.use(`${prefix}/filme`, new FilmeRoutes().routes());
  router.use(`${prefix}/poltrona`, new PoltronaRoutes().routes());
  router.use(`${prefix}/sessao`, new SessaoRoutes().routes());
  router.use(`${prefix}/ingresso`, new IngressoRoutes().routes());
}