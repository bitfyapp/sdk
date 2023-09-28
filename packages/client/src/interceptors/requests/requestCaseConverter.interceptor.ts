import {snakeKeys} from "js-convert-case";

export function requestCaseConverter(config) {
  if (config.data) config.data = snakeKeys(config.data, { recursive: true, keepTypesOnRecursion: [Date] })
  if (config.params) config.params = snakeKeys(config.params, { recursive: true });
  return config;
}
