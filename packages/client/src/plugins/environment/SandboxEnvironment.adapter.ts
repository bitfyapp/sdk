import { Environment } from "./Environment.port";

export class SandboxEnvironmentAdapter implements Environment {
  baseURL: string = 'https://api-sandbox.bitfybaas.com';
  name: string = 'sandbox';
}
