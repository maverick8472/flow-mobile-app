import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Auth = props => {
  return (
    <View style={styles.container}>
      <Text>Authentication</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Auth;
