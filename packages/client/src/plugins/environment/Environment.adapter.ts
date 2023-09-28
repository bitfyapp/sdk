import { Environment } from "./Environment.port";

export class EnvironmentAdapter implements Environment {
  baseURL: string = "https://api.bitfybaas.com";
  name: string = "production";

}
