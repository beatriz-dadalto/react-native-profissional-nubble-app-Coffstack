import React from 'react';

import {Post, postService} from '@domain';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = React.useState<Post[]>();

  React.useEffect(() => {
    postService.getList().then(itemList => setPostList(itemList));
  }, []);

  return (
    <Screen>
      {postList?.map(post => (
        <Text key={post.id}>{post.author.name}</Text>
      ))}
    </Screen>
  );
}
