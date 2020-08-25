import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './MainNav';
import AuthNav from './AuthNav';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      {/* <MainNav /> */}
      <AuthNav />
    </NavigationContainer>
  );
}
