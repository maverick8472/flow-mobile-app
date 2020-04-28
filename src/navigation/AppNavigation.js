import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './MainNav';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
}
