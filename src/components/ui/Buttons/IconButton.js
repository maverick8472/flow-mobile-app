import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../../styles/constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconButton = ({onPress, color, name}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        {/* <MaterialIcons name={props.icon} color={props.color} size={30} /> */}
        <MaterialIcons name={name} size={30} color={color} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    // borderRadius: 8,
    // paddingVertical: 10,
    paddingHorizontal: 2,
  },
});

export default IconButton;
