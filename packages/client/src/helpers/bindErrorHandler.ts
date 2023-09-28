import {AxiosInstance} from "axios";

/**
 * Melhora a implementação do Error handler, pegando todas as excessões possíveis de axios.
 *
 * @param http
 * @param method
 */
export function bindErrorHandler(http: AxiosInstance, method: (error: unknown) => any) {
    const oldGet = http.get;
    http.get = (...args) => oldGet(...args).catch(method);

    const oldPost = http.post.bind(http);
    http.post = (...args) => oldPost(...args).catch(method);

    const oldDelete = http.delete.bind(http);
    http.delete = (...args) => oldDelete(args).catch(method);

    const oldPut = http.put.bind(http);
    http.put = (...args) => oldPut(args).catch(method);

    const oldPatch = http.patch.bind(http);
    http.patch = (...args) => oldPatch(args).catch(method);

    const oldHead = http.head.bind(http);
    http.head = (...args) => oldHead(args).catch(method);

    const oldOptions = http.options.bind(http);
    http.options = (...args) => oldOptions(args).catch(method);

    const oldRequest = http.request.bind(http);
    http.request = (...args) => oldRequest(args).catch(method);
}
