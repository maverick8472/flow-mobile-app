import 'react-native-gesture-handler';
import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './MainNav';
import AuthNav from './AuthNav';
import StartupScreen from '../screens/auth/StartupScreen';

export default function AppNavigation() {
  const isAuth = useSelector(state => !!state.auth.token);
  const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

  return (
    <NavigationContainer>
      {isAuth && <MainNav />}
      {/* {!isAuth && <AuthNav />} */}
      {!isAuth && didTryAutoLogin && <AuthNav />}
      {!isAuth && !didTryAutoLogin && <StartupScreen />}
    </NavigationContainer>
  );
}
