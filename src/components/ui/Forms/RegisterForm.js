import React, {useReducer, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AuthInput from '../../ui/Inputs/AuthInput';
import AuthButton from '../Buttons/AuthButton';

import {useDispatch} from 'react-redux';
import * as authActions from '../../../state/actions/auth';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const RegisterForm = props => {
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      username: '',
      email: '',
      password: '',
    },
    inputValidities: {
      username: false,
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const signupHandler = () => {
    dispatch(
      authActions.signUp(
        // console.log(formState),
        formState.inputValues.username,
        formState.inputValues.email,
        formState.inputValues.password,
      ),
    );
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );

  return (
    <View style={styles.container}>
      <AuthInput
        id="username"
        required
        username
        keyboardType="default"
        placeholder={'Username'}
        autoCapitalize="none"
        errorText="Please enter a valid username."
        onInputChange={inputChangeHandler}
        initialValue=""
        padding={12}
        minLength={5}
      />
      <AuthInput
        id="email"
        required
        email
        keyboardType={'email-address'}
        placeholder={'Email'}
        autoCapitalize="none"
        errorText="Please enter a valid email address."
        onInputChange={inputChangeHandler}
        initialValue=""
      />
      <AuthInput
        id="password"
        required
        password
        keyboardType="default"
        secureTextEntry={true}
        padding={12}
        placeholder={'Password'}
        minLength={5}
        autoCapitalize="none"
        errorText="Please enter a valid password."
        onInputChange={inputChangeHandler}
        initialValue=""
      />
      <AuthButton text={'Register'} onPress={signupHandler} />
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
