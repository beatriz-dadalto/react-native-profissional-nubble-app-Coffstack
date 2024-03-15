import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {
    //TODO
  }

  function navigateToComment() {
    //TODO
  }

  function favoritePost() {
    //TODO
  }

  return (
    <Box flexDirection="row" marginTop="s16" marginBottom="s16">
      <Item
        marked={true}
        onPress={likePost}
        icon={{default: 'heart', marked: 'heartFill'}}
        text={reactionCount}
      />
      <Item
        marked={false}
        onPress={navigateToComment}
        icon={{default: 'comment', marked: 'comment'}}
        text={commentCount}
      />
      <Item
        marked={false}
        onPress={favoritePost}
        icon={{default: 'bookmark', marked: 'bookmarkFill'}}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
}

function Item({onPress, marked, icon, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      marginRight="s24"
      alignItems="center">
      <Icon
        name={marked ? icon.marked : icon.default}
        color={marked ? 'marked' : undefined}
      />
      {text > 0 && (
        <Text marginLeft="s4" preset="paragraphSmall" bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
