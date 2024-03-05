import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" bold>
        Beatriz Dadalto!
      </Text>
      <Text preset="headingSmall" italic>
        Beatriz Dadalto!
      </Text>
    </SafeAreaView>
  );
}

export default App;
