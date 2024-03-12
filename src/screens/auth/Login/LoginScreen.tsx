import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {Alert, View} from 'react-native';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useForm, Controller} from 'react-hook-form';

type LoginFormType = {
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginFormType) {
    Alert.alert(`Email: ${email} ${'\n'} Senha: ${password}`);
  }

  function navigateToSingUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
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
        <Controller
          control={control}
          name="email"
          rules={{
            required: true,
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Email inválido',
            },
          }}
          render={({field, fieldState}) => (
            <TextInput
              errorMessage={fieldState.error?.message}
              value={field.value}
              onChangeText={field.onChange}
              label="E-mail"
              placeholder="Digite seu e-mail"
              boxProps={{marginBottom: 's20'}}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Senha obrigatória',
            minLength: {
              value: 8,
              message: 'Senha deve ter no mínimo 8 caracteres',
            },
          }}
          render={({field, fieldState}) => (
            <PasswordInput
              errorMessage={fieldState.error?.message}
              value={field.value}
              onChangeText={field.onChange}
              label="Senha"
              placeholder="Digite sua senha"
              boxProps={{marginBottom: 's8'}}
            />
          )}
        />
        <Text
          onPress={navigateToForgotPasswordScreen}
          color="primary"
          preset="paragraphSmall"
          bold>
          Esqueci minha senha
        </Text>
        <Button
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
          title="Entrar"
          preset="primary"
          marginTop="s48"
        />
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
