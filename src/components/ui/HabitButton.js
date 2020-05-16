import React from 'react';
import {View, StyleSheet} from 'react-native';
import CircleProgresBar from './CircleProgres';
import CircleButton from './CircleButton';

const HabitButton = props => {
  
  return (
    <View style={styles.container}>
      <View style={styles.progresBar}>
        <CircleProgresBar percentage={props.item.progress} />
      </View>
      <View style={styles.circleButton}>
        <CircleButton text={props.item.habit} style={props.item.color} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 110,
  },
  progresBar: {},
  circleButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
});

export default HabitButton;
