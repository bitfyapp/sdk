import { Auth } from "./plugins/auth/Auth.port";
import {Environment} from "./plugins/environment/Environment.port";
import {Logger} from "./plugins/logger/Logger.port";

/**
 * Nível de logs da API onde "debug" é o mais verboso e o "silly" os logs não serão exibidos.
 *  debug,
 *  info,
 *  warn,
 *  error,
 *  silly,
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'silly'
/**
 * Parâmetros de configuração do Client BaaS
 *
 * @category Main
 */
export interface ClientOptions {
  /**
   * Instância de Logger utilizado no SDK ou nível de logger que será utilizado nele.
   */
  logger?: Logger | LogLevel;
  /**
   * Configurações de Authenticação padrão para o BaaS, os dados de acesso são fornecidos pela dashboard.
   */
  auth?: {
    /**
     * Identificador do cliente gerado pela dashboard.
     */
    clientId: string,
    /**
     * Segredo do cliente gerado pela dashboard.
     */
    clientSecret: string,
    /**
     * Nome da aplicação definido na dashboard.
     */
    applicationName: string,
  },
  /**
   * Ambiente que está realizando a integração. O Environment é apenas para uso interno.
   */
  environment?: 'sandbox' | 'production' | Environment;
  /**
   * Credenciais no padrão OAuth
   * @internal
   */
  authenticator?: Auth
}
