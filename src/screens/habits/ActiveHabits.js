import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ActiveHabits = props => {
  return (
    <View style={styles.container}>
      <Text>Active Habits</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default ActiveHabits;
