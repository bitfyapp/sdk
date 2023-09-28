import {camelKeys} from "js-convert-case";

export function responseCaseConverter(config) {
    if (config.data) config.data = camelKeys(config.data, { recursive: true, recursiveInArray: true });
    return config;
}
