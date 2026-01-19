import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import GameScreen from '../screens/GameScreen';
import ResultScreen from '../screens/ResultScreen';

import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* Onboarding Flow */}
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />

      {/* Main App (Tabs) */}
      <Stack.Screen name="MainTabs" component={BottomTabs} />

      {/* Game Flow (No Tabs) */}
      <Stack.Screen name="Game" component={GameScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
  );
}

// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import HomeScreen from '../screens/HomeScreen';
// import GameScreen from '../screens/GameScreen';
// import ResultScreen from '../screens/ResultScreen';
// import OnboardingScreen from '../screens/OnboardingScreen';

// const Stack = createStackNavigator();

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="Onboarding" component={OnboardingScreen} />
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Game" component={GameScreen} />
//       <Stack.Screen name="Result" component={ResultScreen} />
//     </Stack.Navigator>
//   );
// }
