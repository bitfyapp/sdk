import axios from 'axios';
import {ClientOptions} from "./ClientOptions";
import { TokenContractManager } from "./apis/tokenContractManager/TokenContractManager";
import { Environment } from "./plugins/environment/Environment.port";
import { SandboxEnvironmentAdapter } from "./plugins/environment/SandboxEnvironment.adapter";
import { EnvironmentAdapter } from "./plugins/environment/Environment.adapter";
import { WalletManager } from "./apis/walletManager/WalletManager";
import { AuthAdapter } from "./plugins/auth/Auth.adapter";
import {requestCaseConverter} from "./interceptors/requests/requestCaseConverter.interceptor";
import {responseCleanerInterceptor} from "./interceptors/responses/responseCleaner.interceptor";
import {responseCaseConverter} from "./interceptors/responses/responseCaseConverter.interceptor";
import {ErrorHandlerMiddleware} from "./interceptors/ErrorHandler.middleware";
import {bindErrorHandler} from "./helpers/bindErrorHandler";
import {LoggerAdapter} from "./plugins/logger/Logger.adapter";

/**
 * Responsável por unir todos os dóminios do Cliente BaaS e os fornece através de suas propriedades públicas.
 *
 * Comportamentos:
 * - Qualquer status HTTP igual ou maior que 400 serão tratas como excessões.
 * - Qualquer dado de entrada ou saída terá formatação camelCase ao contrário da API que utiliza snake_case.
 * - Os códigos HTTP não estão disponíveis, estando encapsulados dentro da classe, recebendo apenas o payload ou uma
 *   instância de erro.
 * - A criação e a atualização do token é feito de forma automática após passar as credêncais no {@link ClientOptions}
 *   do construtor.
 *
 * @category Main
 * @property tokenContractManager Cliente responsável por gerenciar as redes e tokens do BaaS.
 * @property walletManager Cliente responsável por gerenciar as carteiras BaaS do Cliente.
 */
export class Client {
  private readonly http;
  private readonly config: Environment;

  /**
   * Api do Token Contract Manager
   */
  public readonly tokenContractManager: TokenContractManager;

  /**
   * Api do Wallet Manager
   */
  public readonly walletManager: WalletManager;

  /**
   * @param options Objeto de configuração do Cliente.
   * @return Client instancia responsável por fazer as autenticações HTTP para um ambiente do BaaS e com controle de
   * autenticação.
   */
  constructor(private readonly options: ClientOptions) {
    this.config = this.resolveConfig(options);
    this.http = this.configureHttp(options);

    this.tokenContractManager = new TokenContractManager(this.http, this.config.prefixes?.ctcm);
    this.walletManager = new WalletManager(this.http, this.config.prefixes?.walletManager);
  }

  private configureHttp(options: ClientOptions) {
    const http = axios.create({
      baseURL: this.config.baseURL,
      headers: {
        "Content-Type": "application/json",
      }
    })

    const auth = options.authenticator ?? new AuthAdapter(this.config, options);
    http.interceptors.request.use(auth.handle.bind(auth))
    http.interceptors.request.use(requestCaseConverter)

    http.interceptors.response.use(responseCaseConverter)


    http.interceptors.response.use(responseCleanerInterceptor)
    const errorHandler = new ErrorHandlerMiddleware(this.resolveLogger());
    bindErrorHandler(http, errorHandler.handle.bind(errorHandler))

    return http;
  }

  private resolveConfig(options: ClientOptions) {
    const environment = options.environment ?? 'production';
    if (typeof environment === "object") {
      return environment;
    }

    switch (options.environment) {
      case "sandbox":
        return new SandboxEnvironmentAdapter();
      case "production":
        return new EnvironmentAdapter();
      default:
        throw new Error(`Environment ${options.environment} doesnt exist.`);
    }
  }

  private resolveLogger() {
    if (typeof this.options.logger === 'object') {
      return this.options.logger;
    }
    return new LoggerAdapter(this.options.logger ?? 'info');
  }
}
