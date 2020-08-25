import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryButton = props => {
  const caegorySwitcher = () => {
    if (props.selected === props.name && props.icon === '') {
      return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.categoryContainer,
            width: '100%',
            backgroundColor: props.color,
            borderRadius: 45,
          }}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              ...styles.selected,
              width: '100%',
              borderRadius: 45,
            }}>
            {props.name}
          </Text>
        </View>
      );
    } else if (props.selected === props.name) {
      return (
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.categoryContainer,
            backgroundColor: props.color,
            borderRadius: 45,
            width: 45,
          }}>
          <MaterialIcons
            style={{...styles.selected}}
            name={props.icon}
            color={props.color}
            size={30}
          />
        </View>
      );
    } else if (props.icon === '') {
      return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{...styles.categoryContainer, width: '100%'}}>
          <Text style={{color: props.color}}> {props.name} </Text>
        </View>
      );
    } else {
      return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{...styles.categoryContainer, width: 45}}>
          <MaterialIcons name={props.icon} color={props.color} size={30} />
        </View>
      );
    }
  };

  return (
    <View
      style={{
        ...styles.touchable,
        borderColor: props.color,
      }}>
      <TouchableOpacity onPress={props.onSelect} useForeground>
        <View>{caegorySwitcher()}</View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    margin: 5,
    borderWidth: 1,
    borderRadius: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  categoryContainer: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  selected: {
    color: 'white',
  },
});

export default CategoryButton;
