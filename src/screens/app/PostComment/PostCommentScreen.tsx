import React from 'react';

import {Box, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
}
