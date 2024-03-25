import React from 'react';

import {Page} from '@types';

/**
 * @description Hook para usar toda vez que precisar fazer uma lista paginada
 * @template TData Interface genérica que representa o tipo de dado da lista
 */
export function usePaginatedList<TData>(
  getList: (page: number) => Promise<Page<TData>>,
) {
  const INITIAL_PAGE = 1;
  const [list, setList] = React.useState<TData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<boolean | null>(null);
  const [page, setPage] = React.useState(INITIAL_PAGE);
  const [hasNextPage, setHasNextPage] = React.useState(true);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const {data, meta} = await getList(INITIAL_PAGE);
      setList(data);
      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
    } catch (errorMessage) {
      console.log('ERROR: ', errorMessage);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchNextPage() {
    if (loading || !hasNextPage) {
      return;
    }

    try {
      setLoading(true);
      const {data, meta} = await getList(page);
      setList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    list,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
