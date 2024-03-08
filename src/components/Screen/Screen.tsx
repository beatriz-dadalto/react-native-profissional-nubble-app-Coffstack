import React from 'react';
import {Box} from '../Box/Box';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
}

export function Screen({children, canGoBack = false}: ScreenProps) {
  const {top} = useAppSafeArea();

  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}}>
      {canGoBack && (
        <Box flexDirection="row" marginBottom="s24">
          <Icon name="arrowLeft" color="primary" />
          <Text preset="paragraphMedium" marginLeft="s4" semiBold>
            Voltar
          </Text>
        </Box>
      )}
      {children}
    </Box>
  );
}
