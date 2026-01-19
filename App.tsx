import 'react-native-gesture-handler';
import React from 'react';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/store/store';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{flex: 1, backgroundColor: 'black'}}
        edges={['top', 'right', 'left', 'bottom']}>
        <Provider store={store}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
