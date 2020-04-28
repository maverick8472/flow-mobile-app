import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Habits = props => {
  const habits = useSelector(state => state.habits.habits);
  console.log(habits);
  return (
    <FlatList
      data={habits}
      keyExtractor={item => item.id}
      renderItem={itemData => <Text>{itemData.item.name}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Habits;
