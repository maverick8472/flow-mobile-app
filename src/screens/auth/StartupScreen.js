import React, {useEffect} from 'react';
import {View, ActivityIndicator, AsyncStorage, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import Colors from '../../styles/constants/Colors';
import * as authActions from '../../state/actions/auth';

const StartupScreen = ({props, navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem('userData');
      if (!userData) {
        // props.navigation.navigate('Auth');
        dispatch(authActions.setDidTryAL());
        return;
      }
      const transformedData = JSON.parse(userData);
      const {token, userId} = transformedData;
      // const expirationDate = new Date(expiryDate);

      // if (expirationDate <= new Date() || !token || !userId) {
      //   // props.navigation.navigate('Auth');
      //   dispatch(authActions.setDidTryAL());
      //   return;
      // }

      // const expirationTime = expirationDate.getTime() - new Date().getTime();

      // props.navigation.navigate('Shop');
      dispatch(authActions.authenticate(userId, token));
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={'#2774b8'} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartupScreen;
