import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';

export function SuccessScreen() {
  function goBackToBegin() {
    // TODO: navegar para a tela de login
  }

  return (
    <Screen>
      <Icon name="bellOn" />
      <Text preset="headingLarge" marginTop="s24">
        Sua conta foi criada com sucesso!
      </Text>
      <Text preset="paragraphLarge" marginTop="s16">
        Agora é só fazer login na nossa plataforma
      </Text>
      <Button
        title="Voltar ao início"
        onPress={goBackToBegin}
        marginTop="s40"
      />
    </Screen>
  );
}
