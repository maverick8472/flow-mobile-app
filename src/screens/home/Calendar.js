import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text>Calendar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Calendar;
