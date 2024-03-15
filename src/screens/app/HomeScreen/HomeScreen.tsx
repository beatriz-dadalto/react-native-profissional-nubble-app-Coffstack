import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Post, postService} from '@domain';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  const [postList, setPostList] = React.useState<Post[]>();

  React.useEffect(() => {
    postService.getList().then(itemList => setPostList(itemList));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen>
      <FlatList
        keyExtractor={item => item.id}
        data={postList}
        renderItem={renderItem}
      />
    </Screen>
  );
}
