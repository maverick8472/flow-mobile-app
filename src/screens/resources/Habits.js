import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import HabitItem from '../../components/habit/HabitItem';
import Button from '../../components/ui/Button';
import CategoryItem from '../../components/habit/CategoryItem';
import CATEGORIES from '../../state/data/categories';

const Habits = ({props, navigation}) => {
  const habits = useSelector(state => state.habits.habits);
  // console.log(habits);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.categories}
        data={CATEGORIES}
        horizontal={true}
        renderItem={({item}) => (
          <CategoryItem name={item.name} icon={item.icon} color={item.color} />
        )}
      />
      <FlatList
        data={habits}
        renderItem={({item}) => (
          <HabitItem
            name={item.name}
            image={item.imageUrl}
            category={item.category}
            dificulty={item.dificulty}
            daysToForm={item.daysToForm}
            instructions={item.instructions}
            onSelect={() => {}}>
            {/* <Button
            title="View Details"
            color={Colors.primary}
            onPress={() => {}}
          /> */}
            <Button
              text="View Details"
              onPress={() => {
                navigation.navigate('HabitDetails', {
                  area: item.name,
                  area_id: item.id,
                });
              }}
            />
            <Button text="Add Habit" />
          </HabitItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'space-around',
    flex: 1, // Ne kuzin zasto
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
