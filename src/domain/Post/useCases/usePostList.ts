import React from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<boolean | null>(null);
  const [postList, setPostList] = React.useState<Post[]>([]);
  const [page, setPage] = React.useState(1);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(page);
      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
    } catch (errorMessage) {
      console.log('ERROR: ', errorMessage);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fetchNextPage() {
    if (!loading) {
      fetchData();
    }
  }

  return {
    loading,
    error,
    postList,
    refetch: fetchData,
    fetchNextPage,
  };
}
