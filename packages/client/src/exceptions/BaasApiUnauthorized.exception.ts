/**
 * Excessão que repesenta código 403.
 * Erro utilizado quando o usuário identificado não pode acessar o recurso por falta de nível de acesso.
 *
 * @category Exception
 * @see https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/403
 */
export class BaasApiUnauthorized extends Error {}
