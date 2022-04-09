/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
//Screen Component
import MainStack from './src/screens/MainStack';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
