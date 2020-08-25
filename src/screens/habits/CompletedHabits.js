import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CompletedHabits = props => {
  return (
    <View style={styles.container}>
      <Text>Completed Habits</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default CompletedHabits;
