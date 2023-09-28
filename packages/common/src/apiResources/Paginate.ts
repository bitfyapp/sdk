/**
 * Interface de Paginação, é comumente utilizado nos endpoints de listagem.
 * @category General
 */
export interface Paginate<T> {
  /**
   * Total de registros encontrados.
   */
  total: number;
  /**
   * Número da última página com registros.
   */
  lastPage: number;
  /**
   * Número da página atual.
   */
  currentPage: number;
  /**
   * Número de itens que estão sendo exibidos por página.
   */
  currentPerPage: number;
  /**
   * Página(Lista) contendo os items.
   */
  items: T[]
}
