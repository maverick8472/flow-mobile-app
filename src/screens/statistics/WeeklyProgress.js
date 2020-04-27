import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WeeklyProgess = props => {
  return (
    <View style={styles.container}>
      <Text>Weekly Progess</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default WeeklyProgess;
