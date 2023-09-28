/**
 * Parametros possíveis a ser passados nos endpoints que possuem paginação
 * @category General
 */
export interface PaginateParams<T, F = Record<keyof T, string>> {
  /**
   * Número da página a ser buscada.
   */
  page?: number;
  /**
   * Itens a serem exibidos por página
   */
  perPage?: number;
  /**
   * Ordenação da busca.
   */
  order?: Record<keyof T, 'DESC' | 'ASC'>;
  /**
   * Objeto de configuração de filtragem.
   */
  filters?: F;
}
