import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryItem = props => {
  let [label, setLabel] = useState();

  useEffect(() => {
    setLabel(props.selected);
  }, [props.selected]);

  const caegorySwitcher = () => {
    if (props.icon === '') {
      return <Text>{props.name}</Text>;
    } else {
      return <MaterialIcons name={props.icon} color={props.color} size={30} />;
    }
  };

  return (
    <View style={{...styles.habit, borderColor: props.color}}>
      <View style={styles.touchable}>
        <TouchableOpacity
          // onPress={}
          style={styles.button}
          useForeground>
          {/* <View style={{...styles.actions, backgroundColor: props.selected}}>
            {caegorySwitcher()}
          </View> */}
          <View style={{...styles.actions, backgroundColor: props.selected}}>
            {caegorySwitcher()}
          </View>
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
    borderRadius: 50,
  },
  actions: {
    padding: 5,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  selected: {
    backgroundColor: 'red',
  },
});

export default CategoryItem;
