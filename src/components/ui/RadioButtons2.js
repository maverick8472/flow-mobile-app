import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import RadioButton from './RadioButton';
import CATEGORIES from '../../state/data/categories';

const RadioButtons = props => {
  const [selected, setSelected] = useState();

  console.log(selected);
  return (
    <View>
      <FlatList
        style={styles.categories}
        data={CATEGORIES}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <RadioButton
            name={item.name}
            icon={item.icon}
            color={item.color}
            selected={selected}
            onSelect={() => {
              setSelected(item.name);
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default RadioButtons;
