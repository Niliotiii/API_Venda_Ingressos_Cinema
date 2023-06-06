import { Router } from 'express';
import { BaseRoutes } from './base/base.routes';
import { ClienteRoutes } from './cliente/cliente.routes';
import { ClassificacaoRoutes } from './classificacao/classificacao.routes';
import { SalaRoutes } from "./sala/sala.routes";


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
  router.use(`${prefix}/classificacao`, new ClassificacaoRoutes().routes());
  router.use(`${prefix}/sala`, new SalaRoutes().routes());
}