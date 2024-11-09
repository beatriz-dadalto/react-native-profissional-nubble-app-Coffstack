import React from 'react';

import {useAuthSignUp} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Screen,
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
  ActivityIndicator,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {SingUpSchema, singUpSchema} from './singUpSchema';
import {useAsyncValidation} from './useAsyncValidation';

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
};

const defaultValues: SingUpSchema = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  const {reset} = useResetNavigationSuccess();

  const {singUp, isLoading} = useAuthSignUp({
    onSuccess: () => {
      reset(resetParam);
    },
  });

  const {control, formState, handleSubmit, watch, getFieldState} =
    useForm<SingUpSchema>({
      resolver: zodResolver(singUpSchema),
      defaultValues,
      mode: 'onChange',
    });

  const {usernameValidation, emailValidation} = useAsyncValidation({
    watch,
    getFieldState,
  });

  // const username = watch('username');
  // const usernameState = getFieldState('username');
  // const usernameIsValid = !usernameState.invalid && usernameState.isDirty;
  // const usernameQuery = useAuthIsUsernameAvailable({
  //   username,
  //   enabled: usernameIsValid,
  // });

  function submitForm(formValues: SingUpSchema) {
    singUp(formValues);
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" marginBottom="s32">
        Criar uma conta
      </Text>
      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        errorMessage={usernameValidation.errorMessage}
        boxProps={{marginBottom: 's16'}}
        RightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />
      <FormTextInput
        control={control}
        name="firstName"
        autoCapitalize="words"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{marginBottom: 's16'}}
      />
      <FormTextInput
        control={control}
        name="lastName"
        autoCapitalize="words"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{marginBottom: 's16'}}
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        errorMessage={emailValidation.errorMessage}
        placeholder="Digite seu e-mail"
        boxProps={{marginBottom: 's16'}}
        RightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        secureTextEntry
        placeholder="Digite sua senha"
        boxProps={{marginBottom: 's48'}}
      />
      <Button
        loading={isLoading}
        disabled={
          !formState.isValid ||
          usernameValidation.notReady ||
          emailValidation.notReady
        }
        title="Criar uma conta"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
