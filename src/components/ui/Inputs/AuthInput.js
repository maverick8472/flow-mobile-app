import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const AuthInput = props => {
  return (
    <View style={{...styles.container, paddingVertical: props.padding}}>
      <TextInput
        {...props}
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder={props.placeholder}
        placeholderTextColor={'#6795b7'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingVertical: 10,
  },
  inputBox: {
    width: 300,
    // backgroundColor: 'rgba(255,255,255,1)',
    // backgroundColor: 'pink',
    // backgroundColor: '#2774b8',
    // borderColor: '#3585BA',
    borderRadius: 25,
    paddingHorizontal: 16,
    borderColor: '#2774b8',
    borderWidth: 1,
    color: '#2c5b9e',
  },
});

export default AuthInput;
