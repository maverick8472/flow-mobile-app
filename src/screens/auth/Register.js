import React from 'react';
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import Logo from '../../components/ui/Logo';
import RegisterForm from '../../components/ui/Forms/RegisterForm';

// main color #3585BA
// 30% black for links

const Register = ({props, navigation}) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar hidden={true} />
      <Logo />
      <RegisterForm />
      <View style={styles.signupTextContainer}>
        <Text style={styles.signupText}>Already have an account? </Text>
        <Text
          style={styles.signupButton}
          onPress={() => navigation.navigate('Login')}>
          SignIn
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

export default Register;
