import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RadioButton3 = props => {
  const checkInPicker = () => {
    if (props.selected === props.item) {
        console.log(props.selected);
      return (
        // <TouchableOpacity onPress={props.onSelect}>
          <View style={{...styles.numberContainer, ...styles.numberSelected}}>
            <Text style={styles.selected}>{props.item}</Text>
          </View>
        // </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{props.item}</Text>
        </View>
      );
    }
  };

  const categoryPicker = () => {
    console.log(props.selected);
    if (props.selected === props.name && props.icon === '') {
      return <Text style={styles.selected}>{props.name}</Text>;
    } else if (props.selected === props.name) {
      return (
        <MaterialIcons
          style={{...styles.selected, backgroundColor: props.color}}
          name={props.icon}
          color={props.color}
          size={30}
        />
      );
    } else if (props.icon === '') {
      return <Text> {props.name} </Text>;
    } else {
      return <MaterialIcons name={props.icon} color={props.color} size={30} />;
    }
  };

  return (
    <View
      style={{
        // ...styles.habit,
        borderColor: props.color,
      }}>
      <TouchableOpacity onPress={props.onSelect}>
        <View style={styles.actions}>
          {props.color ? categoryPicker() : checkInPicker()}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  habit: {},
  //   actions: {
  //     padding: 5,
  //     width: '100%',
  //     height: 40,
  //     alignItems: 'center',
  //     justifyContent: 'space-around',
  //     overflow: 'hidden',
  //   },
  selected: {
    color: 'white',
    borderRadius: 20,
  },
  numberContainer: {
    margin: 3,
    color: 'blue',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  number: {
    color: 'blue',
  },
  numberSelected: {
    color: 'white',
    backgroundColor: 'blue',
  },
});

export default RadioButton3;
