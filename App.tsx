import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
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
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon name="eyeOn" color="gray2" />}
            boxProps={{marginBottom: 's8'}}
          />
          <Text color="primary" preset="paragraphSmall" bold>
            Esqueci minha senha
          </Text>
          <Button title="Entrar" preset="primary" marginTop="s48" />
          <Button title="Criar uma conta" preset="outline" marginTop="s12" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
