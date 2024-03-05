import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {Box} from '../Box/Box';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  return (
    <Box backgroundColor="buttonPrimary" paddingHorizontal="s56">
      <Text preset="paragraphMedium" bold style={{color: '#FFF'}}>
        {title}
      </Text>
    </Box>
  );
}
