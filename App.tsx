import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 24}}>
        <Text preset="headingLarge" bold>
          Beatriz Dadalto!
        </Text>
        <Text preset="headingSmall" italic>
          Beatriz Dadalto!
        </Text>
        <Button title="Entrar" />
      </View>
    </SafeAreaView>
  );
}

export default App;
