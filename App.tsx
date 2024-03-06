import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Icon} from './src/assets/icons/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" bold>
            Beatriz Dadalto!
          </Text>
          <Icon name="eyeOn" />
          <Icon name="eyeOff" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
