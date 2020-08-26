import React from 'react';
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import Logo from '../../components/ui/Logo';
import LoginForm from '../../components/ui/Forms/LoginForm';

// main color #3585BA
// 30% black for links

const Login = ({props, navigation}) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar hidden={true} />
      <Logo />
      <LoginForm />
      <View style={styles.signupTextContainer}>
        <Text style={styles.signupText}>Dont't have an account yet? </Text>
        <Text
          style={styles.signupButton}
          onPress={() => navigation.navigate('Register')}>
          SingUp
        </Text>
      </View>
      {/* <View style={{ height: 60 }} /> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  signupTextContainer: {
    flex: 1,
    // flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: -30,
    marginVertical: -30,
    flexDirection: 'row',
  },
  signupText: {
    color: '#8993ab',
  },
  signupButton: {
    color: '#5b92ae',
    fontWeight: 'bold',
  },
});

export default Login;
