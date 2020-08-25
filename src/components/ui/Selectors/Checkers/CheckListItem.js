import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckListItem = props => {
  const caegorySwitcher = () => {
    console.log(props.selected);
    if (props.selected === true) {
      return <Text style={styles.selected}>{props.name}</Text>;
    } else {
      return <Text style={styles.number}>{props.name}</Text>;
    }
  };

  return (
    // <View style={{...styles.habit, borderColor: props.color}}>
    <View style={{...styles.habit, ...(props.selected ? styles.selected : '')}}>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onSelect}
        // onPress={
        //   // setLabel((label = key));
        //   (props.onSelect, caegorySwitcher)
        // }
        useForeground>
        <View style={styles.numberContainer}>{caegorySwitcher()}</View>
        {/* <Text>{props.name}</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  habit: {
    margin: 5,
    borderWidth: 2,
    borderRadius: 38,
    borderColor: 'blue',
  },
  selected: {
    backgroundColor: 'blue',
    // borderRadius: 20,
    color: 'white',
  },
  numberContainer: {
    padding: 5,
    color: 'blue',
    height: 38,
    width: 38,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  number: {
    color: 'blue',
  },
});

export default CheckListItem;
