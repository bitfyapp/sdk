export interface ClientOptions {
  environment: string;
  auth?: {
    clientId: string,
    secretId: string,
  }
}
