import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './bottomTabNavigation';

export default function App() {
  return (
    <NavigationContainer>
    <BottomNavigator/>
    </NavigationContainer>
  );
}
