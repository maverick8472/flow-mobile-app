import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Logo = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/flow_logo.jpg')}
      />
      <Text style={styles.logoText}>Flow</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
    marginTop: 36,
  },
  logoText: {
    marginVertical: -16,
    // color: '#3585BA',
    color: '#2774b8',
    fontSize: 30,
  },
});

export default Logo;
