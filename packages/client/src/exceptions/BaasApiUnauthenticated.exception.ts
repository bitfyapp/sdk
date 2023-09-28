/**
 * Excessão que repesenta código 401.
 * Apensar de o nome do errro ser Unauthorized, por definição representa a falta de conhecimento de quem o usuário é.
 * Esse erro é comumente utilizado na falta do token de autenticação, ou quando ele não é compreendido.
 *
 * @category Exception
 * @see https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/401
 */
export class BaasApiAuthenticationError extends Error {}
