import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../styles/constants/Colors';
import HabitItem from '../../components/habit/HabitItem';
import Button from '../../components/ui/Button';
import categories from '../../state/data/categories';
import CategoryItem from '../../components/habit/CategoryItem';

const Habits = props => {
  const habits = useSelector(state => state.habits.habits);
  // console.log(habits);
  return (
    <View>
      <FlatList
        style={styles.categories}
        data={categories}
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
            <Button text="View Details" />
          </HabitItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
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
