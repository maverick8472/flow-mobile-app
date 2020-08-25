import React, {useState, useEffect} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CheckListItem from './CheckListItem';
// import Button from '../../Button';

const CheckList = props => {
  const weekDays = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];

  let selectedItems = weekDays.map((item, index) => {
    return {day: item, selected: false};
  });
  const [selected, setSelected] = useState(selectedItems);

  const onUpdateItem = index => {
    let list = [...selected];
    list[index].selected = !list[index].selected;
    setSelected(list);
    console.log(selected);
  };

  return (
    <View>
      <FlatList
        style={styles.categories}
        data={selected}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <CheckListItem
            name={item.day}
            icon={item.icon}
            color={item.color}
            selected={selected[index].selected}
            onSelect={() => {
              onUpdateItem(index);
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

export default CheckList;
