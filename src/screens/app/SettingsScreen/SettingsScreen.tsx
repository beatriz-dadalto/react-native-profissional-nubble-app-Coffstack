import React from 'react';

import {AppScreenProps} from 'src/routes/NavigationType';

import {Screen, Text} from '@components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen(props: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
    </Screen>
  );
}
