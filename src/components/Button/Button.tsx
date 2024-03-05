import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: '#074C4E',
        borderRadius: 16,
        alignItems: 'center',
      }}>
      <Text preset="paragraphMedium" bold style={{color: '#FFF'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
