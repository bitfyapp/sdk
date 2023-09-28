/**
 * Campos comumente utilizado nos recursos do BaaS.
 * @internal
 */
export interface ApiResourceBase {
  /**
   * Identificador do recurso.
   */
  id: number;
  /**
   * Data de criação do recurso.
   */
  createdAt: Date;
  /**
   * Data da últimz atualização do recurso.
   */
  updatedAt: Date | null;
}
