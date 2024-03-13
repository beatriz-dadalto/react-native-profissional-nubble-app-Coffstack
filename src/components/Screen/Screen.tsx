import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Box, TouchableOpacityBox, Icon, Text} from '@components';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {useAppTheme, useAppSafeArea} from '@hooks';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {top} = useAppSafeArea();
  const {colors} = useAppTheme();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{flex: 1}}>
      <Container backgroundColor={colors.background}>
        <TouchableOpacityBox
          onPress={navigation.goBack}
          paddingHorizontal="s24"
          marginBottom="s20"
          style={{paddingTop: top}}>
          {canGoBack && (
            <Box flexDirection="row" marginBottom="s24">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" marginLeft="s4" semiBold>
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </TouchableOpacityBox>
      </Container>
    </KeyboardAvoidingView>
  );
}
