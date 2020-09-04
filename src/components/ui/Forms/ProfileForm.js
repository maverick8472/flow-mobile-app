import React, {useReducer, useState, useCallback, useEffect} from 'react';
import {View, Text, ActivityIndicator, Alert, StyleSheet} from 'react-native';
import AuthInput from '../../ui/Inputs/AuthInput';
import AuthButton from '../Buttons/AuthButton';
import * as authActions from '../../../state/actions/auth';
import {useDispatch} from 'react-redux';

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

const ProfileForm = (props, navigation) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert('Error Occured!', error, [{text: 'Ok'}]);
    }
  }, [error]);

  const signinHandler = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(
        authActions.signIn(
          formState.inputValues.email,
          formState.inputValues.password,
        ),
      );
      // navigation.navigate('Main');
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
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
        email
        keyboardType={'email-address'}
        placeholder={'Username'}
        autoCapitalize="none"
        errorText="Please enter a valid email address."
        onInputChange={inputChangeHandler}
        initialValue=""
        padding={12}
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
      <AuthInput
        id="re-password"
        required
        password
        keyboardType="default"
        secureTextEntry={true}
        placeholder={'Re-Typed Password'}
        minLength={5}
        autoCapitalize="none"
        errorText="Please enter a valid password."
        onInputChange={inputChangeHandler}
        initialValue=""
      />
      {isLoading ? (
        <ActivityIndicator padding={12} size="large" color={'#2774b8'} />
      ) : (
        <AuthButton padding={12} text={'Update'} onPress={signinHandler} />
      )}
      <AuthButton text={'Logout'} onPress={signinHandler} />
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
    marginTop: -50,
  },
});

export default ProfileForm;
