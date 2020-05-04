import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CircleProgresBar from '../../components/ui/CircleProgres';
import CircleButton from '../../components/ui/CircleButton';
import HabitButton from '../../components/ui/HabitButton';
import UserHabitItem from '../../components/habit/UserHabitItem';

const userHabits = [
  {precentage: 30},
  {precentage: 20},
  {precentage: 40},
  {precentage: 75},
  {precentage: 65},
  {precentage: 10},
];

const Home = () => {
  // const precentage = 40;
  return (
    // <View style={styles.container}>
    //   {/* <Text>Home</Text> */}
    //   {/* <HabitButton style={styles.habitButton} /> */}
    //   {/* <CircleProgresBar percentage={75} /> */}
    // </View>
    <View>
      <FlatList data={userHabits} renderItem={({item}) => <UserHabitItem />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  habitButton: {},
});

export default Home;
