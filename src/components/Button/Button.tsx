import React from 'react';
import {Text} from '../Text/Text';
import {Box} from '../Box/Box';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading}: ButtonProps) {
  return (
    <Box
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center">
      {loading ? (
        <Text preset="headingSmall" italic style={{color: 'red'}}>
          Loading...
        </Text>
      ) : (
        <Text preset="paragraphMedium" bold style={{color: '#FFF'}}>
          {title}
        </Text>
      )}
    </Box>
  );
}
