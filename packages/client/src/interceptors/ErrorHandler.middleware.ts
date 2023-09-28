import * as axios from "axios";
import {AxiosError} from "axios";
import {BaasApiInternalServerError} from "../exceptions/BaasApiInternalServerError.exception";
import {BaasApiServiceUnavailable} from "../exceptions/BaasApiServiceUnavailable.exception";
import {BaasApiInvalidPayload} from "../exceptions/BaasApiInvalidPayload.exception";
import {BaasApiAuthenticationError} from "../exceptions/BaasApiUnauthenticated.exception";
import {BaasApiUnauthorized} from "../exceptions/BaasApiUnauthorized.exception";
import {BaasApiResourceNotFound} from "../exceptions/BaasApiResourceNotFound.exception";
import {Logger} from "../plugins/logger/Logger.port";
import {BaasApiUnableSendRequest} from "../exceptions/BaasApiUnableSendRequest.exception";

export class ErrorHandlerMiddleware {
    constructor(private readonly logger: Logger) {}
    handle(error: unknown) {
        if (!axios.isAxiosError(error)) throw error;
        const axiosError = error as AxiosError<{ message: string}>;
        this.logger.log('debug', 'Error occurs while trying make a http request.', error.toJSON());

        if (!axiosError.response) {
            throw new BaasApiUnableSendRequest(axiosError);
        }

        if (axiosError.response.status === 500) {
            throw new BaasApiInternalServerError(axiosError.response.data.message);
        }

        if (axiosError.response.status === 503) {
            throw new BaasApiServiceUnavailable(axiosError.response.data?.message);
        }

        if (axiosError.response.status === 422 || axiosError.response.status === 400 || axiosError.response.status === 409) {
            throw new BaasApiInvalidPayload(axiosError.response.data.message);
        }

        if (axiosError.response.status === 401) {
            throw new BaasApiAuthenticationError(axiosError.response.data.message);
        }

        if (axiosError.response.status === 403) {
            throw new BaasApiUnauthorized(axiosError.response.data.message);
        }

        if (axiosError.response.status === 404) {
            throw new BaasApiResourceNotFound(axiosError.response.data.message);
        }

        throw new BaasApiUnableSendRequest(axiosError);
    }
}
