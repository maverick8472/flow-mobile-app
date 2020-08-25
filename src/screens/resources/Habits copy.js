import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import HabitItem from '../../components/habit/HabitItem';
import Button from '../../components/ui/Button';
import CategoryItem from '../../components/habit/CategoryItem';

const Habits = ({props}) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.categories}
        data={props.categories}
        horizontal={true}
        renderItem={({item}) => (
          <CategoryItem name={item.name} icon={item.icon} color={item.color} />
        )}
      />
      <FlatList
        data={props.habits}
        renderItem={({item}) => (
          <HabitItem
            name={item.name}
            image={item.imageUrl}
            category={item.category}
            dificulty={item.dificulty}
            daysToForm={item.daysToForm}
            instructions={item.instructions}>
            <Button text="View Details" />
            <Button text="Add Habit" />
          </HabitItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categories: {
    paddingBottom: 5,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
  },
});

export default Habits;
