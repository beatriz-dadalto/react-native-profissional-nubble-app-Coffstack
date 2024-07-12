import React, {useEffect} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';
import {Page} from '@types';

export interface UsePaginatedListResult<TData> {
  list: TData[];
  isLoading: boolean;
  isError: boolean | null;
  refresh: () => void;
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

/**
 * @description Hook para usar toda vez que precisar fazer uma lista paginada
 * @template TData Interface genérica que representa o tipo de dado da lista
 */
export function usePaginatedList<TData>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<TData>>,
): UsePaginatedListResult<TData> {
  const [list, setList] = React.useState<TData[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: ({meta}) =>
      meta.hasNextPage ? meta.currentPage + 1 : undefined,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<TData[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);
      setList(newList);
    }
  }, [query.data]);

  return {
    list,
    isLoading: query.isLoading,
    isError: query.isError,
    refresh: query.refetch,
    hasNextPage: !!query.hasNextPage,
    fetchNextPage: query.fetchNextPage,
  };
}
