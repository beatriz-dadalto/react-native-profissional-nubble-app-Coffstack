import {usePaginatedList} from '@domain';

import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';

export function usePostCommentList(postId: number) {
  /**
   * @description recebe o parâmetro extra postId que é necessário para a
   * requisição HTTP do domínio de PostComment
   * @param page recebe o valor que está na função getList em usePaginatedList
   */
  function getList(page: number) {
    return postCommentService.getList(postId, page);
  }

  return usePaginatedList<PostComment>(getList);
}
