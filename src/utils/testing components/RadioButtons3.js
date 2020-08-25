import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import RadioButton3 from './RadioButton3';

const RadioButtons3 = props => {
  const [selected, setSelected] = useState();

  // if there is no color prop use default color function
  // console.log(selected);
//   console.log(props.checkIns);
  return (
    <View>
      <FlatList
        data={props.items}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <RadioButton3
            item={item}
            name={item.name}
            icon={item.icon}
            color={item.color}
            selected={selected}
            onSelect={() => {
              setSelected(item);
            }}
          />
        //   <Text>Radi li?</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default RadioButtons3;
