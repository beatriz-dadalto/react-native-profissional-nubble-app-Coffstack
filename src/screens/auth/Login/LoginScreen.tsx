import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {View} from 'react-native';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function LoginScreen({navigation}) {
  function navigateToSingUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <Screen scrollable>
      <View style={{paddingHorizontal: 24}}>
        <Text marginBottom="s8" preset="headingLarge">
          Olá, Beatriz Dadalto!
        </Text>
        <Text preset="paragraphLarge" marginBottom="s40">
          Digite seu e-mail e senha para entrar
        </Text>
        <TextInput
          errorMessage="Mensagem de erro"
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{marginBottom: 's20'}}
        />
        <PasswordInput
          label="Senha"
          placeholder="Digite sua senha"
          boxProps={{marginBottom: 's8'}}
        />
        <Text color="primary" preset="paragraphSmall" bold>
          Esqueci minha senha
        </Text>
        <Button title="Entrar" preset="primary" marginTop="s48" />
        <Button
          onPress={navigateToSingUpScreen}
          title="Criar uma conta"
          preset="outline"
          marginTop="s12"
        />
      </View>
    </Screen>
  );
}
