import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../styles/constants/Colors';

const CircleButton = ({text, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.buttonContainer, backgroundColor: style}}>
        <Text
          adjustsFontSizeToFit
          numberOfLines={2}
          allowFontScaling
          style={styles.buttonText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    // backgroundColor: Colors.primary,
    height: 78,
    width: 78,
    borderRadius: 150,
    justifyContent: 'center',
    // textAlign: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
  },
});

export default CircleButton;
