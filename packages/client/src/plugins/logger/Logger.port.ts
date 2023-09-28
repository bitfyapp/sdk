import {LogLevel} from "../../ClientOptions";

/**
 * Contrato para instancia customizada de Log
 */
export interface Logger {
    /**
     * Método que exibirá os logs.
     * @param level level do log.
     * @param message Mensagem a ser mostrada.
     * @param context Metadato de contexto da mensagem.
     */
    log(level: LogLevel, message: string, context?: object)
}
