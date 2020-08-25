import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AuthInput from '../../ui/Inputs/AuthInput';
import AuthButton from '../Buttons/AuthButton';

// main color #3585BA
// 30% black for links

const RegisterForm = props => {
  return (
    <View style={styles.container}>
      <AuthInput padding={12} placeholder={'Username'} />
      <AuthInput keyboardType={'email-address'} placeholder={'Email'} />
      <AuthInput secureTextEntry={true} padding={12} placeholder={'Password'} />
      <AuthButton text={'Register'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexGrow: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
});

export default RegisterForm;
