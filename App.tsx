import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" bold>
            Beatriz Dadalto!
          </Text>
          <Button title="Primary" preset="primary" marginBottom="s12" />
          <Button title="Outline" preset="outline" marginBottom="s12" />
          <Button title="Secondary" preset="secondary" marginBottom="s12" />
          <Button loading title="Loading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
