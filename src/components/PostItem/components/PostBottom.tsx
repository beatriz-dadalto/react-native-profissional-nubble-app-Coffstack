import React from 'react';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount'>;

export function PostBottom({author, text, commentCount}: Props) {
  function navigateToComments() {
    //TODO
  }

  const commentText = getCommentText(commentCount);

  return (
    <Box>
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1" paddingTop="s4">
        {text}
      </Text>
      {commentText && (
        <Text
          onPress={navigateToComments}
          preset="paragraphSmall"
          bold
          color="primary"
          paddingTop="s8">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return `ver ${commentCount} comentário`;
  } else {
    return `ver ${commentCount} comentários`;
  }
}
