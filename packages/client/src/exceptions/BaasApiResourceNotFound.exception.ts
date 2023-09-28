/**
 * Excessão que repesenta código 404 da API.
 * Esse código é retornado quando a URL que está tentando acessar não existe.
 * obs: Caso seja passado um parametro via URL como "ID" e o objeto não seja encontrado, esse código é retornado.
 * @category Exception
 * @see https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/404
 */
export class BaasApiResourceNotFound extends Error {}
