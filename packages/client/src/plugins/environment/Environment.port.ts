/**
 * Utilizado para atribuir as configurações de cada ambiente que o cliente pode se conectar.
 * @internal
 */
export interface Environment {
  name: string;
  baseURL: string;
  prefixes?: Record<string, string>
}
