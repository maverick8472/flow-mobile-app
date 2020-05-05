import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CircleProgresBar from '../../components/ui/CircleProgres';
import CircleButton from '../../components/ui/CircleButton';
import HabitButton from '../../components/ui/HabitButton';
import UserHabitItem from '../../components/habit/UserHabitItem';
import CategoryPieChart from '../../components/ui/CategoryPieChart';
import CATEGORIES from '../../state/data/categories';
import CategoryListItem from '../../components/ui/CategoriListItem';

const userHabits = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
];

const Home = () => {
  // const precentage = 40;
  return (
    // <View style={styles.container}>
    //   {/* <Text>Home</Text> */}
    //   {/* <HabitButton style={styles.habitButton} /> */}
    //   {/* <CircleProgresBar percentage={75} /> */}
    // </View>
    <View style={styles.container}>
      <FlatList data={userHabits} renderItem={({item}) => <UserHabitItem />} />
    </View>
    // <View>
    //   <Text>Home</Text>
    // </View>
  );
};

// const styles = StyleSheet.create({
//   container: {},
//   habitButton: {},
// });

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // padding: ,
  },
  categoriesList: {
    width: '40%',
  },
  categoryProgress: {
    // justifyContent: 'space-around',
    // alignItems: 'center',
    width: '60%',
  },
});

export default Home;
