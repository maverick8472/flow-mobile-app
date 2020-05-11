import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import CircleProgresBar from '../../components/ui/CircleProgres';
import CircleButton from '../../components/ui/CircleButton';
import HabitButton from '../../components/ui/HabitButton';
import UserHabitItem from '../../components/habit/UserHabitItem';
import CategoryPieChart from '../../components/ui/CategoryPieChart';
import CATEGORIES from '../../state/data/categories';
import CategoryListItem from '../../components/ui/CategoryListItem';
import Card from '../../components/ui/Card';

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

// '1',
// 'Take a walk',
// 'https://cdn.pixabay.com/photo/2015/03/26/10/36/wood-691629__340.jpg',
// 'Health',
// 1,
// 22,
// 'Walking is a great way to improve or maintain your overall health. Just
// 30 minutes every day can increase cardiovascular fitness, strengthen
// bones, reduce excess body fat, and boost muscle power and endurance.
// It can also reduce your risk of developing conditions such as
// heart disease, type 2 diabetes, osteoporosis and some cancers.
// Unlike some other forms of exercise, walking is free and doesn’t
// require any special equipment or training.',

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
    // <Text>Home</Text>
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

  image: {
    width: '100%',
    height: '100%',
  },
});

export default Home;
