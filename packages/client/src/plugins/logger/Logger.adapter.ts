import {LogLevel} from "../../ClientOptions";
import {Logger} from "./Logger.port";

export class LoggerAdapter implements Logger {

    private readonly priority: Record<LogLevel, number> = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3,
        silly: 4,
    };
    constructor(private readonly level: LogLevel) {}

    log(level: LogLevel, message: string, context?: object) {
        if (this.priority[this.level] < this.priority[level]) return;
        console.log(`[bws-baas][${level}] `, message, { context: context ?? {} });
    }
}
