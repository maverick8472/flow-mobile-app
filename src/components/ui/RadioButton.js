import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RadioButton = props => {
  const caegorySwitcher = () => {
    if (props.selected === props.name && props.icon === '') {
      return (
        <Text style={{...styles.selected, backgroundColor: props.color}}>
          {props.name}
        </Text>
      );
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
    <View style={{...styles.habit, borderColor: props.color}}>
      <View style={styles.touchable}>
        <TouchableOpacity
          style={styles.button}
          onPress={props.onSelect}
          useForeground>
          <View style={styles.actions}>{caegorySwitcher()}</View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  habit: {
    margin: 5,
    // width: 40,
    borderWidth: 1,
    borderRadius: 20,
  },
  actions: {
    padding: 5,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  selected: {
    // padding: 5,
    // width: '100%',
    // height: 40,
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // backgroundColor: ,
    color: 'white',
  },
});

export default RadioButton;
