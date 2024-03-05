import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" style={{fontFamily: 'Satoshi-BlackItalic'}}>
        Beatriz Dadalto!
      </Text>
      <Text preset="headingSmall" style={{color: 'green'}}>
        Beatriz Dadalto!
      </Text>
    </SafeAreaView>
  );
}

export default App;
