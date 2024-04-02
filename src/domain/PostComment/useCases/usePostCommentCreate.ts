import React from 'react';

import {postCommentService} from '../postCommentService';

export function usePostCommentCreate(postId: number) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setLoading(true);
      setError(null);
      await postCommentService.create(postId, message);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    createComment,
    loading,
    error,
  };
}
