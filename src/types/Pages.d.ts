/**
 * @description Adapter de MetaDataPageAPI para faze-lo adaptar-se
 * ao domínio.
 */
export interface MetaDataPage {
  total: number; // 24;
  perPage: number; // 10;
  currentPage: number; // 1;
  lastPage: number; // 3;
  firstPage: number; // 1;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

/**
 * @description Interface para usar com um serviço externo e faze-lo
 * adaptar-se ao domínio, sendo assim, se houver mudança na api não
 * será necessário modificar código.
 * @template TData Tipo do dado da página.
 */
export interface Page<TData> {
  meta: MetaDataPage;
  data: TData[];
}
