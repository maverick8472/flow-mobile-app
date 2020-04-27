import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Habits = props => {
  return (
    <View style={styles.container}>
      <Text>Habits</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Habits;
