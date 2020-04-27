import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UsersHabits = props => {
  return (
    <View style={styles.container}>
      <Text>UsersHabits</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default UsersHabits;
