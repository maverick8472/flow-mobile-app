import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../styles/constants/Colors';
import Category from '../../state/models/category';

const CategoryListItem = ({color, text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {/* <View style={{...styles.buttonContainer, backgroundColor: color}}> */}
      <View style={styles.buttonContainer}>
        <Text style={{...styles.buttonText, color: color}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    // backgroundColor: Colors.primary,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 10,
  },
});

export default CategoryListItem;
