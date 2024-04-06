import React from 'react';
import {Dimensions} from 'react-native';

import {Box, BoxProps, Icon, Text} from '@components';
import {$shadowProps} from '@theme';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function Toast() {
  return (
    <Box top={100} {...$boxStyle}>
      <Icon color="success" name="checkRound" />
      <Text {...$textStyle} marginLeft="s16" preset="paragraphMedium" bold>
        Toast Component
      </Text>
    </Box>
  );
}

const $textStyle: BoxProps = {
  flexShrink: 1,
};

const $boxStyle: BoxProps = {
  position: 'absolute',
  backgroundColor: 'background',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: {...$shadowProps},
};
