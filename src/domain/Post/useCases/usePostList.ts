import React from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<boolean | null>(null);
  const [postList, setPostList] = React.useState<Post[]>([]);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch (errorMessage) {
      console.log('ERROR: ', errorMessage);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    error,
    postList,
    refetch: fetchData,
  };
}
