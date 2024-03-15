import React from 'react';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();

  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      <Box backgroundColor="carrotSecondary" height={16} width={70} />
      <Box flexDirection="row">
        <Box marginRight="s24">
          <Icon name="search" />
        </Box>
        <Box marginRight="s24">
          <Icon name="bell" />
        </Box>
        <Icon name="chat" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 's24',
  paddingHorizontal: 's24',
};
