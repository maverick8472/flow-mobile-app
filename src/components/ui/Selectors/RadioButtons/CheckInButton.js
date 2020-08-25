import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckInButton = props => {
  const checkInSelector = () => {
    if (props.selected === props.item) {
      return (
        <View style={{...styles.numberContainer, ...styles.selected}}>
          <Text style={styles.selectedNumber}>{props.item}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{props.item}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.touchable}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>{checkInSelector()}</View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    margin: 3,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'blue',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  numberContainer: {
    margin: 3,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'blue',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  number: {
    color: 'blue',
  },
  selectedNumber: {
    color: 'white',
  },
  selected: {
    backgroundColor: 'blue',
  },
});

export default CheckInButton;
