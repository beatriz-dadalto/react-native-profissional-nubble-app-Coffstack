import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen, Icon, Text, Button} from '@components';
import {RootStackParamList} from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
  function goBackToBegin() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" marginTop="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" marginTop="s16">
        {route.params.description}
      </Text>
      <Button
        title="Voltar ao início"
        onPress={goBackToBegin}
        marginTop="s40"
      />
    </Screen>
  );
}
