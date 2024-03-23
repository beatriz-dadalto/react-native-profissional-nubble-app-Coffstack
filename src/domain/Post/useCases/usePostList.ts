import React from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<boolean | null>(null);
  const [postList, setPostList] = React.useState<Post[]>([]);
  const [page, setPage] = React.useState(1);

  async function fetchInitialData() {
    const initialPage = 1;
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(initialPage);
      setPostList(list);
      // TODO: validar se tem mais páginas
      setPage(2);
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
    if (loading) {
      return;
    }

    try {
      setLoading(true);
      const list = await postService.getList(page);
      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    postList,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
