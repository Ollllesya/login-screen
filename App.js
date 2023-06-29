import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './screens/SignInScreen';
import UserScreen from './screens/UserScreen';

const AppStackNavigator = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <AppStackNavigator.Navigator>
      <AppStackNavigator.Screen name="SignInScreen" component={SignInScreen} />
      <AppStackNavigator.Screen name="UserScreen" component={UserScreen} />
    </AppStackNavigator.Navigator>
    </NavigationContainer>
  );
}
